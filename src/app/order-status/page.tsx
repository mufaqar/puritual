"use client";

import { useSearchParams } from "next/navigation";

export default function OrderStatusPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Order Status</h1>

      <div className="bg-gray-100 p-4 rounded">
        <p><strong>Order ID:</strong> {orderId}</p>
     
      </div>

    
        <p className="mt-4 text-green-600">✅ Payment Successful!</p>
     
    </div>
  );
}
