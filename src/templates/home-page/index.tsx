"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollText from "@/components/ScrollText";
import Logo from "../logo/logo";
import Shop from "../Shop/shop";
import Delightful from "../Delight/Delightful";
import Vitamin from "../Delight/Vitamin";
import Better from "../Delight/Better";
import Premium from "../Premium";
import ProductSlider from "@/components/product-layout/ProductSlider";
import ScrollImageSection from "@/components/ui/scroll-image";

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
      <ScrollImageSection />
      <Premium />
      <Delightful />
      <Vitamin />
      <Better />
      <ProductSlider products={products} />
      <Logo />
      <Shop />
    </>
  );
};

export default HomePage;
