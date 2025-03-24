import React from "react";
import Marquee from "react-fast-marquee";

const ScrollText = () => {
  return (
    <section className="rotate-[-5deg] md:leading-[150px] leading-[80px] text-[80px] md:text-[157px] scale-105">
      <Marquee autoFill className="overflow-hidden" speed={80}>
        <p className="text-stroke uppercase !duration-[40s] mr-14 md:mr-40 over">
          ORGANIC GOODNESS
        </p>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" direction="right">
        <p className="text-secoundry flex gap-40 mr-14 md:mr-40 font-cervo font-medium text-nowrap uppercase">
          <span>SAFE INGREDIENTS</span>
          <span>ORGANIC PRODUCTS</span>
        </p>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" speed={100}>
        <div className="flex gap-20 text-nowrap uppercase mr-14 md:mr-40 items-center font-cervo">
          <p className="text-dark font-medium">LUXURY MEETS FUN</p>
          <p className="text-stroke">NOURISH</p>
        </div>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" speed={70} direction="right">
        <div className="flex gap-20 text-nowrap uppercase mr-14 md:mr-40 items-center font-cervo">
          <p className="text-stroke">hydration</p>
          <p className="text-dark font-medium">NATURALLY</p>
        </div>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" speed={110}>
        <p className="text-stroke uppercase mr-14 md:mr-40 scroll-content4 !duration-[40s]">
          NATURALLY
        </p>
      </Marquee>
    </section>
  );
};

export default ScrollText;
