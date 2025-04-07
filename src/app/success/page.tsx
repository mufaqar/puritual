// app/success/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionData, setSessionData] = useState<any>(null);
  const options:any = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-GB', options);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/get-checkout-session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => setSessionData(data));
    }
  }, [sessionId]);

  return (
    <>
    <section className="bg-primary w-full">
        <main className="overflow-y-hidden sm:pt-24 pt-26 pb-10 sm:pb-20 bg-dark rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 mt-8 overflow-y-hidden text-[14vw] font-medium md:text-[10vw] font-cervo leading-[13vw] text-primary md:leading-[8vw] text-center">
            {Array.from("Payment Successful!").map((char, index) => (
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
          ✅ Thanks for your order!
          </h2>
          <p className="text-gray-500 mb-6 md:mb-8">
            Your order{" "}
            <a
              href="#"
              className="font-medium text-dark hover:underline"
            >
              #7564804
            </a>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-dark p-6 mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-pure">
                Date
              </dt>
              <dd className="font-medium text-primary sm:text-end">
                {currentDate}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-pure">
                Payment Method
              </dt>
              <dd className="font-medium text-primary sm:text-end">
                Card
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-pure">
                Name
              </dt>
              <dd className="font-medium text-primary sm:text-end">
              {sessionData?.customer_details?.name}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-pure">
                Address
              </dt>
              <dd className="font-medium text-primary sm:text-end">
                {sessionData?.metadata?.company_name} {sessionData?.metadata?.city}, {sessionData?.metadata?.country}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-pure">
                Email
              </dt>
              <dd className="font-medium text-primary sm:text-end">
                {sessionData?.customer_details?.email}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-pure">
                Phone
              </dt>
              <dd className="font-medium text-primary sm:text-end">
                +(123) 456 7890
              </dd>
            </dl>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white bg-dark pb-2.5 pt-3 px-5 rounded-[8px] hover:bg-secoundry hover:text-dark"
            >
              Track your order
            </a>
            <a
              href="#"
              className="text-dark bg-secoundry pb-2.5 pt-3 px-5 rounded-[8px] hover:bg-dark hover:text-white"
            >
              Return to shopping
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
