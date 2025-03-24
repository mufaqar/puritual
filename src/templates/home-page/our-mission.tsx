"use client";
import CircleButton from "@/components/ui/circle-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const OurMission = () => {
  const text = "OUR JOURNEY, MISSION, AND VALUES";
  const text2 = "HOW IT ALL STARTED";
  const letterHeadingOne = text.split("");
  const letterHeadingTwo = text2.split("");

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

  useGSAP(() => {
    gsap.from(".mission-Img", {
      y: 220,
      delay: 0.5,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".mission-Img",
        start: "top 70%", // Start animation when 80% of the element is in view
      },
    });
    gsap.from(".mission-text", {
      y: 220,
      delay: 0.5,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".mission-text",
        start: "top 50%", // Start animation when 80% of the element is in view
      },
    });
    gsap.from(".mission-text2", {
      y: 220,
      delay: 0.5,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".mission-text2",
        start: "top 50%", // Start animation when 80% of the element is in view
      },
    });
    gsap.from(".mission-Img2", {
      y: 220,
      delay: 0.5,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".mission-Img2",
        start: "top 60%", // Start animation when 80% of the element is in view
      },
    });
    gsap.from(".mission-Img3", {
      y: 220,
      duration: 1,
      scrollTrigger: {
        trigger: ".mission-Img3",
        start: "top 60%", // Start animation when 80% of the element is in view
      },
    });
    gsap.from(".heading2", {
      y: 220,
      duration: 1,
      scrollTrigger: {
        trigger: ".heading2",
        start: "top 50%", // Start animation when 80% of the element is in view
      },
    });
  })

  return (
    <section className="bg-dark pt-12 pb-20 relative overflow-x-hidden">
      <div className="overflow-y-hidden px-4 md:px-0">
        <div className="text-[54px] md:text-[90px] lg:text-[175px] z-[1] relative text-center max-w-[1280px] mx-auto text-white font-cervo font-medium uppercase leading-[60px] md:leading-[90px] lg:leading-[160px]">
          {letterHeadingOne?.map((item, idx) => (
            <span className="t4" key={idx}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-0">
        <div className="text-[54px] md:text-[90px] lg:text-[175px] z-[1] relative text-center max-w-[1280px] mx-auto text-white font-cervo font-medium uppercase leading-[60px] md:leading-[90px] lg:leading-[160px]">
          {letterHeadingTwo?.map((item, idx) => (
            <span key={idx} className="t5">{item}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-4 md:px-0 md:flex-row items-center justify-center gap-8 md:gap-14 max-w-[1280px] mx-auto">
        <figure className="">
          <Image
            src="/images/mission.png"
            alt=""
            width={665}
            height={826}
            className="md:max-w-[500px] w-full mission-Img mt-6 md:-mt-28"
          />
        </figure>
        <div className="md:max-w-[483px] font-axiforma text-white mission-text">
          <p>
            Once upon a time, a group of friends with big dreams and even bigger
            hearts decided to make an impact in the world of personal care.
            After countless discussions, trial and errors, and endless cups of
            coffee, we brought our wildest ideas to life and created products
            that make hygiene fun and fabulous.
          </p>
          <p>
            Our journey wasn’t smooth and easy, but our commitment to excellence
            and creativity kept us going strong. With hardly any clients, we
            leaned on our close-knit community for support which gave us
            confidence to keep moving and we started reaching more people who
            loved our mission as much as we did.
          </p>
          <p>
            Now, we are super excited to introduce our premium products to the
            world. We’re here to make every wash a delightful experience and to
            set new trends in personal care that everyone can enjoy. Join us on
            this amazing journey and let’s make cleanliness cool together!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 flex flex-col md:flex-row gap-10 mt-6 items-end">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-start">
          <Image
            src="/images/mission-1.png"
            alt=""
            width={397}
            height={296}
            className="mission-Img2 max-w-[397px] w-full" 
          />
          <div className="text-white max-w-[675px] mission-text">
            <h2 className="text-[18vw] leading-[18vw] md:text-[120px] md:leading-[110px] z-[1] mb-5 md:mb-10 heading2 relative mx-auto text-white font-cervo font-medium uppercase ">
              REDEFINING HAND & BODY CARE
            </h2>
            <div className="mission-text2">
            <p>
              Imagine a future where personal hygiene is not just a routine but
              a luxurious and fun experience. Our commitment is to change this
              landscape by introducing premium quality foaming handwashes and
              body cleansers that do more than just clean- they nourish
              rejuvenate your skin.{" "}
            </p>
            <p className="mb-8 md:mb-16">
              We are a strong believer of the fact that everyone deserves to
              treat themselves to quality products made with care and the best
              ingredients. Plus, we care about the earth too, so we make sure
              our products are good for you and for our planet. We want to lift
              the game and become trend setters in personal care, where
              innovation meets style, and every wash is a pleasure. Our
              allegiance to quality and wellness aims to elevate your daily
              routines and make you feel wonderful, wherever you happen to be in
              the world.
            </p>
            </div>
            <CircleButton />
          </div>
        </div>
        <Image
          src="/images/mission-2.png"
          alt=""
          width={457}
          height={626}
          className="mission-text"
        />
      </div>

      <Image
        src="/svg/bubble.svg"
        alt=""
        width={220}
        className="absolute top-40 right-0 scroll-bubble-1 w-[80px] md:w-[220px]"
        height={220}
      />
      <div className="scroll-bubble-1 flex absolute top-60">
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]"/>
        <Image
          src="/images/bubble-white.png"
          alt=""
          width={141}
          height={253}
          className=" absolute bottom-0 left-20 md:left-60 md:w-[141px]"
        />
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]"/>
      </div>
    </section>
  );
};

export default OurMission;
