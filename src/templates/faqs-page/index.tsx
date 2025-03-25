"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FaqsTemplate = ({ faqs }: any) => {
  const faqRefs = useRef<any>([]);

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
    <section className="bg-primary pb-20">
      <main className="overflow-y-hidden pt-32 pb-12">
        <h1 className="flex justify-center text-[14vw] font-medium md:text-[8vw] font-cervo leading-[13vw] text-dark md:leading-[8vw] text-center">
          <span className="t1">F</span>
          <span className="t1">A</span>
          <span className="t1">Q</span>
        </h1>
      </main>
      <div className="max-w-[1280px] mx-auto px-3">
        {faqs?.map((item: any, idx: number) => (
          <div
            key={idx}
            ref={(el: any) => (faqRefs.current[idx] = el)}
            className="border-t gap-20 p-10 flex border-dark opacity-0"
          >
            <h4 className="w-[35%] font-cervo font-medium text-4xl">
              {item?.question}
            </h4>
            <p className="flex-1">{item?.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsTemplate;
