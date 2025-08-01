"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import AboutSection from "./about-us";

const AboutTemplate = () => {
  const text = "OUR JOURNEY, MISSION, AND VALUES";
  const text2 = "HOW IT ALL STARTED";
  const letterHeadingOne = text.split("");
  const letterHeadingTwo = text2.split("");

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

  useGSAP(() => {
    gsap.from(".t4", {
      y: 220,
      stagger: 0.05,
      opacity: 0,
      delay: 0.5,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".t4",
        start: "top 80%", // Start animation when 80% of the element is in view
      },
    });
  })
  useGSAP(() => {
    gsap.from(".t5", {
      y: 220,
      stagger: 0.05,
      opacity: 0,
      delay: 1.6,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".t5",
        start: "top 80%", // Start animation when 80% of the element is in view
      },
    });
  })

  return (
    <>
      <section className="bg-primary w-full">
        <main className=" sm:pt-24 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          <div className=" px-4 md:px-0">
            <div className="text-[54px] md:text-[90px]  z-[1] relative text-center max-w-[1280px] mx-auto text-white font-medium uppercase leading-[60px] md:leading-[90px] ">
              {letterHeadingOne?.map((item, idx) => (
                <span className="t4" key={idx}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="px-4 md:px-0">
            <div className="text-[54px] md:text-[90px]  z-[1] relative text-center max-w-[1280px] mx-auto text-white font-medium uppercase leading-[60px] md:leading-[90px] ">
              {letterHeadingTwo?.map((item, idx) => (
                <span key={idx} className="t5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </main>
      </section>

      <section className="pt-10 pb-20 bg-primary">
        <div className="max-w-[1280px] mx-auto px-3 grid gap-4">
          <AboutSection />
        </div>
      </section>
    </>
  );
};

export default AboutTemplate;
