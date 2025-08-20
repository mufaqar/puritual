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
        <main className=" sm:pt-28 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 overflow-y-hidden md:text-[70px] md:leading-[100px] text-6xl font-medium uppercase text-center text-dark font-Melodrama">
            {Array.from("FAQS").map((char, index) => (
              <span key={index} className="t1 uppercase">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </main>
      </section>

      <section className="bg-primary pt-20 pb-20 space-y-10">
        {faqs?.map((faq: any, id: number) => (
          <div key={id}
            ref={(el: any) => (faqRefs.current[id] = el)}
            className="container mx-auto px-3 opacity-0">
            <h2 className="md:text-[70px] md:leading-[60px] text-[28px] font-normal tracking-normal text-dark font-Melodrama mb-10">
              {faq?.title}
            </h2>
            {faq?.items?.map((item: any, idx: number) => (
              <div
                key={idx}
                className="border-t gap-4 sm:gap-10 md:gap-20 text-dark py-4 md:p-10 flex flex-col sm:flex-row border-dark"
              >
                <h4 className="sm:w-[35%] font-medium text-2xl sm:text-4xl">
                  {item?.question}
                </h4>
                <div className="flex-1 space-y-2" dangerouslySetInnerHTML={{ __html: item?.answer }} />
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default FaqsTemplate;
