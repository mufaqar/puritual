"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FaqsTemplate = ({ faqs }: any) => {
  const faqRefs = useRef<any>([]);
useGSAP(() => {
    // Animate heading text
    gsap.from(".t1", {
      y: 220,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
    });
  });
  useEffect(() => {
    faqRefs.current.forEach((faq: any, index: number) => {
      if (faq) {
        gsap.fromTo(
          faq,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: faq,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1, // Stagger effect when entering individually
          }
        );
      }
    });
  }, []);

  useGSAP(() => {
    gsap.from(".t1", {
      y: 220,
      stagger: 0.05,
    });
  });

  return (
    <>
    <section className="bg-primary w-full">
        <main className="overflow-y-hidden sm:pt-36 pt-26 pb-10 sm:pb-20 bg-dark rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 overflow-y-hidden text-[14vw] font-medium md:text-[10vw] font-cervo leading-[13vw] text-primary md:leading-[8vw] text-center">
            {Array.from("FAQS").map((char, index) => (
              <span key={index} className="t1 uppercase">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </main>
      </section>
  
    <section className="bg-primary pt-20 pb-20">
      <div className="max-w-[1280px] mx-auto px-3">
        {faqs?.map((item: any, idx: number) => (
          <div
            key={idx}
            ref={(el: any) => (faqRefs.current[idx] = el)}
            className="border-t gap-4 sm:gap-10 md:gap-20 text-dark py-4 md:p-10 flex flex-col sm:flex-row border-dark opacity-0"
          >
            <h4 className="sm:w-[35%] font-cervo font-medium text-2xl sm:text-4xl">
              {item?.question}
            </h4>
            <p className="flex-1">{item?.answer}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default FaqsTemplate;
