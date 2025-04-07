"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import CheckoutForm from "./checkout-form"

const Checkout = () => {
  const timeline = gsap.timeline();
  useGSAP(() => {
    // Animate heading text
    timeline.from(".t1", {
      y: 220,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
    });
  });

  return (
    <>
      <section className="bg-primary w-full">
        <main className="overflow-y-hidden sm:pt-24 pt-26 pb-10 sm:pb-20 bg-dark rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 mt-8 overflow-y-hidden text-[14vw] font-medium md:text-[10vw] font-cervo leading-[13vw] text-primary md:leading-[8vw] text-center">
            {Array.from("Checkout").map((char, index) => (
              <span key={index} className="t1 uppercase">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </main>
      </section>
      <section className="bg-primary py-10 md:py-20">
            <CheckoutForm/>
      </section>
    </>
  );
};

export default Checkout;
