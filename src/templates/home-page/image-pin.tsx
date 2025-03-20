import CircleButton from "@/components/ui/circle-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const ImagePin = () => {
    
  useGSAP(() => {
    gsap.from(".t2", {
      y: 220,
      stagger: 0.05,
    });
    gsap.from(".text2", {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
  });

  return (
    <>
      <main className="relative flex justify-center">
        <div className="absolute w-full z-[2] flex flex-col justify-center text-pure top-0 h-screen">
          <div className="container px-10 text-dark mx-auto">
            <div className="overflow-y-hidden flex items-center gap-4">
              <h2 className="flex justify-end text-[12vw] font-cervo font-medium leading-[10vw] text-right">
                <p className="t2">S</p>
                <p className="t2">H</p>
                <p className="t2">O</p>
                <p className="t2">P</p>
              </h2>
              <p className="text-lg max-w-[344px] pt-10 mb-5">
                A gentle, organic hand wash that cleanses, hydrates, and
                refreshes—powered by nature! 💧
              </p>
            </div>
            <h2 className="flex overflow-y-hidden text-[12vw] font-cervo font-medium leading-[10vw] text-left">
              <p className="t2">H</p>
              <p className="t2">Y</p>
              <p className="t2">G</p>
              <p className="t2">I</p>
              <p className="t2">E</p>
              <p className="t2">N</p>
              <p className="t2">E</p>
            </h2>
            <div className="flex gap-8 items-center">
              <h2 className="flex justify-end overflow-y-hidden text-[12vw] font-cervo font-medium leading-[10vw] text-left">
                <p className="t2">P</p>
                <p className="t2">U</p>
                <p className="t2">R</p>
                <p className="t2">I</p>
                <p className="t2">T</p>
                <p className="t2">U</p>
                <p className="t2">A</p>
                <p className="t2">L</p>
              </h2>
              <CircleButton dark/>
            </div>
          </div>
        </div>
      </main>

      <figure className="imageWrapper bg-primary">
        <Image
          src="/images/product-banner.png"
          alt=""
          id="mainImage2"
          width={1500}
          height={800}
          className="!object-cover z-[1] img2 h-screen w-screen !top-0"
        />
      </figure>
    </>
  );
};

export default ImagePin;
