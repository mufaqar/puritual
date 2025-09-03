// app/order-status/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

// TypeScript interface for the API response
interface OrderStatusResponse {
  ResponseCode: string;
  Description: string;
  MerchantId: string;
  MerchantName: string;
  StoreId: string;
  StoreName: string;
  TransactionTypeId: string;
  TransactionReferenceNumber: string;
  OrderDateTime: string;
  TransactionId: string;
  TransactionDateTime: string;
  AccountNumber: string | null;
  TransactionAmount: string;
  MobileNumber: string;
  TransactionStatus: string;
}

// Component to handle query parameters and API response
const OrderStatusContent = () => {
  const searchParams = useSearchParams();
  const rc = searchParams.get('rc') ?? 'N/A';
  const rd = searchParams.get('rd') ?? 'N/A';
  const ts = searchParams.get('ts') ?? 'N/A';
  const order = searchParams.get('order') ?? 'N/A';

  // State for API response
  const [apiResponse, setApiResponse] = useState<OrderStatusResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const response = await fetch(
          `https://payments.bankalfalah.com/HS/api/IPN/OrderStatus/32286/220188/${order}`, // Use sandbox for testing
          {
            method: 'GET'
           
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch order status');
        }
        const data: OrderStatusResponse = await response.json();
        setApiResponse(data);
      } catch (err) {
        console.error('Failed to fetch API response:', err);
        setError('Failed to load order status');
      }
    };

    fetchOrderStatus();
  }, []);

  return (
    <>
      <section className="bg-primary w-full">
        <main className="sm:pt-28 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          <div className="container mx-auto px-3 md:px-0">
            <h1 className="md:text-[100px] md:leading-[100px] text-6xl font-medium uppercase text-center text-dark font-Melodrama">
              Order Status
            </h1>
          </div>
        </main>
      </section>
      <section className="pt-10 pb-20 bg-primary">
        <div className="max-w-[1280px] mx-auto px-3 grid gap-4">
          <h2 className="text-2xl font-bold">Query Parameters</h2>
          <ul className="list-disc pl-5">
            <li>RC: {rc}</li>
            <li>RD: {rd}</li>
            <li>TS: {ts}</li>
            <li>Order: {order}</li>
          </ul>
          <h2 className="text-2xl font-bold">API Response</h2>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : !apiResponse ? (
            <p>Loading API response...</p>
          ) : (
            <ul className="list-disc pl-5">
              <li>Response Code: {apiResponse.ResponseCode}</li>
              <li>Description: {apiResponse.Description}</li>
              <li>Merchant ID: {apiResponse.MerchantId}</li>
              <li>Merchant Name: {apiResponse.MerchantName}</li>
              <li>Store ID: {apiResponse.StoreId}</li>
              <li>Store Name: {apiResponse.StoreName}</li>
              <li>Transaction Type ID: {apiResponse.TransactionTypeId}</li>
              <li>Transaction Reference Number: {apiResponse.TransactionReferenceNumber}</li>
              <li>Order DateTime: {apiResponse.OrderDateTime}</li>
              <li>Transaction ID: {apiResponse.TransactionId || 'N/A'}</li>
              <li>Transaction DateTime: {apiResponse.TransactionDateTime}</li>
              <li>Account Number: {apiResponse.AccountNumber ?? 'N/A'}</li>
              <li>Transaction Amount: {apiResponse.TransactionAmount}</li>
              <li>Mobile Number: {apiResponse.MobileNumber}</li>
              <li>Transaction Status: {apiResponse.TransactionStatus}</li>
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

// Wrap in Suspense
const OrderStatus = () => {
  return (
    <Suspense fallback={<div className="text-center pt-20">Loading order status...</div>}>
      <OrderStatusContent />
    </Suspense>
  );
};

export default OrderStatus;