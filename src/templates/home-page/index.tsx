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
import Logo from "../logo/logo";
import Shop from "../Shop/shop";
import Delightful from "../Delight/Delightful";
import Vitamin from "../Delight/Vitamin";
import Better from "../Delight/Better";
import Premium from "../Premium";
import ProductSlider from "@/components/product-layout/ProductSlider";

gsap.registerPlugin(ScrollTrigger);

const HomePage = ({ products }: any) => {
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
      top: 0,
    });
    gsap.to("#mainImage", {
      scale: 0.4,
      objectFit: "cover",
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
      <main className="relative flex justify-center">
        <div className="absolute w-full z-[2] flex flex-col justify-center text-pure top-0 h-screen">
          <div className="container mx-auto grid md:grid-cols-2 gap-4 lg:gap-14 px-4">
            <div className="">
              <div className="overflow-y-hidden">
                <h2 className="font-bold flex md:justify-start text-[10vw] md:text-[8vw] font-berlos leading-[10vw] md:leading-[8vw] text-right">
                  <p className="t1">C</p>
                  <p className="t1">L</p>
                  <p className="t1">E</p>
                  <p className="t1">A</p>
                  <p className="t1">N</p>
                  <p className="t1">S</p>
                  <p className="t1">E</p>
                </h2>
              </div>
              <h2 className="font-bold flex md:justify-end overflow-y-hidden text-[10vw] md:text-[8vw] font-berlos leading-[10vw] md:leading-[8vw] text-right">
                <p className="t1">R</p>
                <p className="t1">E</p>
                <p className="t1">F</p>
                <p className="t1">R</p>
                <p className="t1">E</p>
                <p className="t1">S</p>
                <p className="t1">H</p>
              </h2>
              <h2 className="font-bold flex md:justify-start text-[10vw] md:text-[8vw] font-berlos leading-[10vw] md:leading-[8vw] text-right">
                <p className="t1">R</p>
                <p className="t1">E</p>
                <p className="t1">P</p>
                <p className="t1">E</p>
                <p className="t1">A</p>
                <p className="t1">T</p>
              </h2>
              <h2 className="font-bold flex md:justify-start text-[10vw] md:text-[5vw] font-berlos leading-[10vw] md:leading-[5vw] text-right">
                <p className="t1">Y</p>
                <p className="t1">O</p>
                <p className="t1">U</p>
                <p className="t1">R </p>
                <p className="t1"> </p>
                <p className="t1">D</p>
                <p className="t1">A</p>
                <p className="t1">I</p>
                <p className="t1">L</p>
                <p className="t1">Y </p>
                <p className="t1"> </p>
                <p className="t1">T</p>
                <p className="t1">R</p>
                <p className="t1">E</p>
                <p className="t1">A</p>
                <p className="t1">T</p>
              </h2>
            </div>
            <div className="text">
              <p className="text-lg max-w-[600px] pt-3 lg:pt-10 mb-5">
                A soothing, organic hand wash that cleans, moisturizes, and revitalizes —powered by nature.
              </p>
              <CircleButton link="/catalog" />
            </div>
          </div>
        </div>
      </main>

      <figure className="imageWrapper bg-primary">
        <Image
          src="/images/web-banner.jpg"
          alt=""
          id="mainImage"
          width={1500}
          height={800}
          className="!object-cover md:object-center object-right z-[1] img h-screen w-screen !top-0"
        />
      </figure>

      <section className="py-14 bg-primary w-full absolute overflow-hidden translate-y-[-110%] md:translate-y-[-90%]">
        <ScrollText />
      </section>

      {/* <OurMission /> */}
      {/* <OurProducts products={products} /> */}
      <ProductSlider products={products} />
      <Logo/>
      {/* <ImagesScroller /> */}
      {/* <ImagePin /> */}
      <Premium />
      <Delightful />
      <Vitamin />
      <Better/>
      <Shop />

      <section className="fixed inset-0 bg-black z-[1000] splash"></section>
    </>
  );
};

export default HomePage;
