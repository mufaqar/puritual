"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const [amount, setAmount] = useState("100.00");
  const router = useRouter();

  const handlePay = async () => {
    const orderId = `ORDER-${Date.now()}`;
    router.push(`/payment/redirect?amount=${amount}&orderId=${orderId}`);
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <label className="block mb-2">Amount</label>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handlePay}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}
