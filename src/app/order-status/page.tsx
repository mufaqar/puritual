"use client";

import { useSearchParams } from "next/navigation";

export default function OrderStatusPage() {
  const searchParams = useSearchParams();
  const rc = searchParams.get("rc");
  const rd = searchParams.get("rd");
  const ts = searchParams.get("ts");
  const order = searchParams.get("order");

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Order Status</h1>

      <div className="bg-gray-100 p-4 rounded">
        <p><strong>Order ID:</strong> {order}</p>
        <p><strong>Status Code:</strong> {rc}</p>
        <p><strong>Description:</strong> {rd}</p>
        <p><strong>Transaction Status:</strong> {ts}</p>
      </div>

      {rc === "00" ? (
        <p className="mt-4 text-green-600">✅ Payment Successful!</p>
      ) : (
        <p className="mt-4 text-red-600">❌ Payment Failed.</p>
      )}
    </div>
  );
}
