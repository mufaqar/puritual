"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile"
import Link from "next/link";

const ReturnsSection = () => {
  const isMobile = useIsMobile();

  useGSAP(() => {
    gsap.utils.toArray([
      ".mission-text",
    ]).forEach((element: any, index) => {
      gsap.from(element, {
        x: isMobile ? (index % 2 === 0 ? -100 : 100) : 0, // Left-to-right for even indexes, right-to-left for odd
        y: isMobile ? 0 : 220, // Only apply Y animation on desktop
        opacity: 0,
        delay: 0.3,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
        },
      });
    });
  }, [isMobile]);

  return (
    <section className="pt-12 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-3 md:px-0">
        <div className="mission-text text-dark">
          <p>At Puritual, we want you to love every part of your cleansing ritual. If something’s not quite right, we’re here to help.</p>
          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Return or exchange</h3>
          <p>We collect personal information such as your name, email, shipping address, and payment details when you:</p>         
        </div>
      </div>
      <Image
        src="/svg/bubble.svg"
        alt=""
        width={220}
        className="absolute top-40 right-0 scroll-bubble-1 w-[80px] md:w-[220px]"
        height={220}
      />
      <div className="scroll-bubble-1 flex absolute top-60">
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]" />
        <Image
          src="/images/bubble-white.png"
          alt=""
          width={141}
          height={253}
          className=" absolute bottom-0 left-20 md:left-60 md:w-[141px]"
        />
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]" />
      </div>
    </section>
  );
};

export default ReturnsSection;
