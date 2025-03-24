"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleButton from "@/components/ui/circle-button";
import ScrollText from "@/components/ScrollText";
import OurMission from "./our-mission";
import OurProducts from "./our-products";
import ImagesScroller from "./images-scroller";
import ImagePin from "./image-pin";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.to(".splash", {
      height: 0,
      duration: 1,
      delay: 1,
    });
  });

  useGSAP(() => {
    timeline.from(".t1", {
      y: 220,
      stagger: 0.05,
    });
    gsap.from(".text", {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
  });

  useGSAP(() => {
    gsap.from("#mainImage", {
      scale: 1.2,
      delay: 1.5,
      duration: 3,
      top: 0
    })
    gsap.to("#mainImage", {
      scale: .4,
      objectFit: 'cover',
      scrollTrigger: {
        trigger: ".img",
        start: "top -1%",
        end: "top -90%",
        scrub: 2,
        pin: true,
        // markers: true,
      },
    });
  });

  return (
    <>
      {/* <main className="relative flex justify-center">
        <div className="absolute w-full z-[2] flex flex-col justify-center text-pure top-0 h-screen">
          <div className="grid grid-cols-2 gap-14">
            <div className="">
              <div className="overflow-y-hidden">
                <h2 className="font-bold flex justify-end text-[8vw] font-berlos leading-[8vw] text-right">
                  <p className="t1">R</p>
                  <p className="t1">E</p>
                  <p className="t1">D</p>
                  <p className="t1">E</p>
                  <p className="t1">F</p>
                  <p className="t1">I</p>
                  <p className="t1">N</p>
                  <p className="t1">I</p>
                  <p className="t1">N</p>
                  <p className="t1">G</p>
                </h2>
              </div>
              <h2 className="font-bold flex justify-end overflow-y-hidden text-[8vw] font-berlos leading-[8vw] text-right">
                <p className="t1">H</p>
                <p className="t1">Y</p>
                <p className="t1">G</p>
                <p className="t1">I</p>
                <p className="t1">E</p>
                <p className="t1">N</p>
                <p className="t1">E</p>
              </h2>
            </div>
            <div className="text">
              <p className="text-lg max-w-[600px] pt-10 mb-5">
                A gentle, organic hand wash that cleanses, hydrates, and
                refreshes—powered by nature! 💧
              </p>
              <CircleButton />
            </div>
          </div>
          <h2 className="font-bold text-[8vw] font-berlos flex justify-center overflow-y-hidden leading-[8vw] text-center">
            <p className="t1">L</p>
            <p className="t1">U</p>
            <p className="t1">X</p>
            <p className="t1">U</p>
            <p className="t1">R</p>
            <p className="t1">Y</p>
            <p className="t1"> </p>
            <p className="t1 ml-10">F</p>
            <p className="t1">F</p>
            <p className="t1">N</p>
          </h2>
        </div>
      </main>

      <figure className="imageWrapper bg-primary">
        <Image
          src="/images/main.png"
          alt=""
          id="mainImage"
          width={1500}
          height={800}
          className="!object-cover z-[1] img h-screen w-screen !top-0"
        />
      </figure> */}

      {/* <section className="py-14 bg-primary w-full absolute overflow-hidden translate-y-[-90%]">
        <ScrollText/>
      </section> */}
      
      {/*<OurMission/>
      <OurProducts/>
      <ImagesScroller/>
      <ImagePin/> */}

      <section className="fixed inset-0 bg-black z-[1000] splash"></section>
    </>
  );
};

export default HomePage;
