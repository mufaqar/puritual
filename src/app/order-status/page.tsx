"use client";
import { Suspense } from "react";

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
          <h2 className="text-2xl font-bold">Thank you</h2>
          <p>   Your order request has been received. We will review it and update you within 24 hours.</p>
          
       
          
          
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