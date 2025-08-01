// app/success/page.tsx
"use client";
import WooCommerce from "@/lib/woocommerce";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SuccessPage() {
  const [orderId, setOrderId] = useState<any>();
  const [orderRes, setOrderRes] = useState<any>();
  const [loading, setLoading] = useState(false);

  const trackOrder = async () => {
    setLoading(true);
    try {
      const response = await WooCommerce.get(`orders/${orderId}`);
      setOrderRes(response?.data);
    } catch (error:any) {
      if (error.response && error.response.status === 404) {
        toast.error(`Order #${orderId} not found!`)
      } else {
        console.error("An error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-primary w-full">
        <main className="overflow-y-hidden sm:pt-24 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 mt-8 overflow-y-hidden text-[14vw] font-medium md:text-[10vw] leading-[13vw] text-primary md:leading-[8vw] text-center">
            {Array.from("Order Tracking!").map((char, index) => (
              <span key={index} className="t1 uppercase">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </main>
      </section>

      <section className=" py-20 antialiased bg-primary">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-dark sm:text-2xl mb-2">
            ✅ Track Your Order!
          </h2>
          <p className="text-gray-500 mb-6 md:mb-8">
            You can track your order status with order ID
          </p>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-dark p-6 mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <p className="text-nowrap text-secoundry border-r pr-4">
                Order ID:
              </p>
              <input
                type="number"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="text-white w-full outline-none border-none"
                placeholder="Enter Your Order ID"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={trackOrder}
              disabled={loading}
              className="text-white bg-dark pb-2.5 pt-3 cursor-pointer px-5 rounded-[8px] hover:bg-secoundry hover:text-dark"
            >
              {loading ? "Tracking..." : "Track your order"}
            </button>
            <Link
              href="/"
              className="text-dark bg-secoundry pb-2.5 pt-3 px-5 rounded-[8px] hover:bg-dark hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {orderRes && (
        <section className=" bg-primary pb-20">
          <div className="mx-auto max-w-2xl px-4 2xl:px-0">
            <h4 className="text-2xl font-semibold text-dark">
              Order Status For #{orderId}:
              <span className="capitalize font-medium text-blue-600">
                {" "}
                {orderRes?.status}
              </span>
            </h4>
          </div>
        </section>
      )}
    </>
  );
}
