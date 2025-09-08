"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

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

const OrderStatusContent = () => {
  const searchParams = useSearchParams();
  const rc = searchParams.get("rc") ?? "N/A";
  const rd = searchParams.get("rd") ?? "N/A";
  const ts = searchParams.get("ts") ?? "N/A";
  const order = searchParams.get("order") ?? "N/A";

  const [apiResponse, setApiResponse] = useState<OrderStatusResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrderStatus = async () => {
      // Don't call API if order is not available
      if (order === "N/A") {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        console.log("Fetching order status for:", order);
        
        const response = await fetch(
          `https://sandbox.bankalfalah.com/HS/api/IPN/OrderStatus/32286/220188/${order}`,
          { 
            method: "GET",
            headers: {
              'Accept': 'application/json',
            }
          }
        );
        
        console.log("API Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch order status: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("API Response data:", data);
        
        // Check if the response has the expected structure
        if (data && typeof data === 'object') {
          setApiResponse(data as OrderStatusResponse);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err: any) {
        console.error("Failed to fetch API response:", err.message);
        setError(`Failed to load order status: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderStatus();
  }, [order]);

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
            <li>Order: {order}</li>
            <li>Response Code (rc): {rc}</li>
            <li>Response Description (rd): {rd}</li>
            <li>Transaction Status (ts): {ts}</li>
          </ul>
          
          <h2 className="text-2xl font-bold">API Response</h2>
          
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-4">Loading order status...</span>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 font-medium">Error: {error}</p>
              <p className="text-red-600 text-sm mt-2">
                Please check if the order reference is correct and try again.
              </p>
            </div>
          ) : !apiResponse ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-700">No order status data available.</p>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Order Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Response Code</p>
                  <p className="font-medium">{apiResponse.ResponseCode}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Description</p>
                  <p className="font-medium">{apiResponse.Description}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaction Amount</p>
                  <p className="font-medium">{apiResponse.TransactionAmount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaction Status</p>
                  <p className="font-medium">{apiResponse.TransactionStatus}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Merchant</p>
                  <p className="font-medium">{apiResponse.MerchantName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Store</p>
                  <p className="font-medium">{apiResponse.StoreName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaction Date/Time</p>
                  <p className="font-medium">{apiResponse.TransactionDateTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Date/Time</p>
                  <p className="font-medium">{apiResponse.OrderDateTime}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const OrderStatus = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-4">Loading page...</span>
        </div>
      }
    >
      <OrderStatusContent />
    </Suspense>
  );
};

export default OrderStatus;