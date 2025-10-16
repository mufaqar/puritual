"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/order?orderId=${orderId}`);
        const data = await res.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-dark">
        Loading your order...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-red-600">
        Failed to load order details.
      </div>
    );
  }

  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date(order.date_created).toLocaleDateString("en-GB", options);

  return (
    <>
   <section className="bg-primary w-full">
        <main className=" sm:pt-28 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          <h1 className="flex justify-center flex-wrap px-10 mt-8 text-[14vw] font-medium md:text-[10vw] leading-[13vw] text-primary md:leading-[8vw] text-center">
            {Array.from("Thank you").map((char, index) => (
              <span key={index} className="t1 uppercase">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </main>
      </section>

      <section className="py-20 antialiased bg-primary">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-dark sm:text-2xl mb-2">
            ✅ Thanks for your order!
          </h2>
          <p className="text-gray-500 mb-6 md:mb-8">
            Your order
            <span className="font-medium text-dark ml-1">#{order.id}</span> will be processed
            within 24 hours during working days. We will notify you by email once your order has
            been shipped.
          </p>

          <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-dark p-6 mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal text-pure">Date</dt>
              <dd className="font-medium text-primary sm:text-end">{currentDate}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal text-pure">Payment Method</dt>
              <dd className="font-medium text-primary sm:text-end">
                {order?.payment_method_title}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal text-pure">Name</dt>
              <dd className="font-medium text-primary sm:text-end">
                {order?.billing?.first_name} {order?.billing?.last_name}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal text-pure">Email</dt>
              <dd className="font-medium text-primary sm:text-end">{order?.billing?.email}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal text-pure">Phone</dt>
              <dd className="font-medium text-primary sm:text-end">{order?.billing?.phone}</dd>
            </dl>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href={`/order-tracking?orderId=${order.id}`}
              className="text-white bg-dark pb-2.5 pt-3 px-5 rounded-[8px] hover:bg-secoundry hover:text-dark"
            >
              Track your order
            </Link>
            <Link
              href="/"
              className="text-dark bg-secoundry pb-2.5 pt-3 px-5 rounded-[8px] hover:bg-dark hover:text-white"
            >
              Return to shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
