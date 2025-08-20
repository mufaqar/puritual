"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import AboutSection from "./about-us";

const AboutTemplate = () => {
  const text = "Where Clean Meets Calm.";
  const text2 = "And a Little Fun.";
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
        <main className=" sm:pt-28 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          <div className="container mx-auto px-3 md:px-0">
            <h1 className="md:text-[100px] md:leading-[100px] text-6xl font-medium uppercase text-center text-dark font-Melodrama">
              {letterHeadingOne?.map((item, idx) => (
                <span className="t4" key={idx}>
                  {item}
                </span>
              ))}
            </h1>
            <h1 className="md:text-[100px] md:leading-[100px] text-6xl font-medium uppercase text-center text-dark font-Melodrama">
              {letterHeadingTwo?.map((item, idx) => (
                <span key={idx} className="t5">
                  {item}
                </span>
              ))}
            </h1>
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
