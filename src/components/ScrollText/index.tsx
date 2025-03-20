import React from "react";
import Marquee from "react-fast-marquee";

const ScrollText = () => {
  return (
    <section className="rotate-[-5deg] scale-105">
      <Marquee autoFill className="overflow-hidden" speed={100}>
        <p className="text-stroke text-[157px] uppercase !duration-[40s] mr-40 over">
          ORGANIC GOODNESS
        </p>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" direction="right">
        <p className="text-secoundry flex gap-40 text-[157px] mr-40 font-cervo font-medium text-nowrap leading-[150px] uppercase">
          <span>SAFE INGREDIENTS</span>
          <span>ORGANIC PRODUCTS</span>
        </p>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" speed={120}>
        <div className="flex gap-20 text-nowrap uppercase mr-40 items-center font-cervo leading-[150px]">
          <p className="text-dark text-[157px] font-medium">LUXURY MEETS FUN</p>
          <p className="text-stroke text-[157px]">NOURISH</p>
        </div>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" speed={80} direction="right">
        <div className="flex gap-20 text-nowrap uppercase mr-40 items-center font-cervo leading-[150px]">
          <p className="text-stroke text-[157px]">hydration</p>
          <p className="text-dark text-[157px] font-medium">NATURALLY</p>
        </div>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" speed={150}>
        <p className="text-stroke text-[157px] uppercase mr-40 scroll-content4 !duration-[40s] leading-[150px]">
          NATURALLY
        </p>
      </Marquee>
    </section>
  );
};

export default ScrollText;
