// app/order-status/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Create a component to handle useSearchParams
const OrderStatusContent = () => {
  const searchParams = useSearchParams();
  const rc = searchParams.get("rc") ?? "N/A"; // '00'
  const rd = searchParams.get("rd") ?? "N/A"; // 'PS'
  const ts = searchParams.get("ts") ?? "N/A"; // 'P'
  const order = searchParams.get("order") ?? "N/A"; // 'A10'

  return (
    <>
      <section className="bg-primary w-full">
        <main className=" sm:pt-28 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          <div className="container mx-auto px-3 md:px-0">
            <h1 className="md:text-[100px] md:leading-[100px] text-6xl font-medium uppercase text-center text-dark font-Melodrama">
              Order Status
            </h1>
          </div>
        </main>
      </section>
      <section className="pt-10 pb-20 bg-primary">
        <div className="max-w-[1280px] mx-auto px-3 grid gap-4">
          <h1>Order Status</h1>
          <p>RC: {rc}</p>
          <p>RD: {rd}</p>
          <p>TS: {ts}</p>
          <p>Order: {order}</p>
        </div>
      </section>
    </>
  );
};

// Wrap the component in Suspense
const OrderStatus = () => {
  return (
    <Suspense fallback={<div>Loading order status...</div>}>
      <OrderStatusContent />
    </Suspense>
  );
};

export default OrderStatus;
