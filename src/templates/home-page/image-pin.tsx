import ScrollText from "@/components/ScrollText";
import CircleButton from "@/components/ui/circle-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

const ImagePin = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".t3", {
      y: 220,
      stagger: 0.05,
      opacity: 0,
      delay: 0.5,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".t3",
        start: "top 80%", // Start animation when 80% of the element is in view
      },
    });

    gsap.from(".text3", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".text3",
        start: "top 90%",
      },
    });
  });

  return (
    <>
      <main className="relative flex justify-center bg-primary ">
        <div className="absolute w-full z-[2] flex flex-col justify-center text-pure top-0 h-screen">
          <div className="container px-4 md:px-10 text-dark mx-auto">
            <div className="overflow-y-hidden flex flex-col md:flex-row md:items-center gap-4">
              <h2 className="flex md:justify-end text-[20vw] leading-[16vw] md:text-[12vw] font-cervo font-medium md:leading-[10vw] text-right">
                <p className="t3">S</p>
                <p className="t3">H</p>
                <p className="t3">O</p>
                <p className="t3">P</p>
              </h2>
              <h2 className="flex overflow-y-hidden md:hidden text-[20vw] leading-[16vw] md:text-[12vw] font-cervo font-medium md:leading-[10vw] text-left">
              <p className="t3">H</p>
              <p className="t3">Y</p>
              <p className="t3">G</p>
              <p className="t3">I</p>
              <p className="t3">E</p>
              <p className="t3">N</p>
              <p className="t3">E</p>
            </h2>
            <h2 className="flex md:hidden md:justify-end overflow-y-hidden text-[20vw] leading-[16vw] md:text-[12vw] font-cervo font-medium md:leading-[10vw] text-left">
                <p className="t3">P</p>
                <p className="t3">U</p>
                <p className="t3">R</p>
                <p className="t3">I</p>
                <p className="t3">T</p>
                <p className="t3">U</p>
                <p className="t3">A</p>
                <p className="t3">L</p>
              </h2>
              <p className="text-lg max-w-[344px] pt-10 mb-5 text3">
                A gentle, organic hand wash that cleanses, hydrates, and
                refreshes—powered by nature! 💧
              </p>
            </div>
            <h2 className="overflow-y-hidden hidden md:flex text-[12vw] font-cervo font-medium md:leading-[10vw] text-left">
              <p className="t3">H</p>
              <p className="t3">Y</p>
              <p className="t3">G</p>
              <p className="t3">I</p>
              <p className="t3">E</p>
              <p className="t3">N</p>
              <p className="t3">E</p>
            </h2>
            <div className="flex gap-8 items-center">
              <h2 className="hidden md:flex justify-end overflow-y-hidden text-[12vw] font-cervo font-medium md:leading-[10vw] text-left">
                <p className="t3">P</p>
                <p className="t3">U</p>
                <p className="t3">R</p>
                <p className="t3">I</p>
                <p className="t3">T</p>
                <p className="t3">U</p>
                <p className="t3">A</p>
                <p className="t3">L</p>
              </h2>
              <CircleButton dark />
            </div>
          </div>
        </div>
      </main>

      <figure className="imageWrapper bg-primary">
        <Image
          src="/images/product-banner.png"
          alt=""
          id="pinImage"
          width={1500}
          height={800}
          className="!object-cover z-[1] pImg h-screen w-screen !top-0"
        />
      </figure>

      <section className="py-14 bg-primary w-full overflow-hidden">
        <ScrollText/>
      </section>
    </>
  );
};

export default ImagePin;
