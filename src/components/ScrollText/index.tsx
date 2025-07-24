import React from "react";
import Marquee from "react-fast-marquee";

const ScrollText = () => {
  return (
    <section className="space-y-10">
      <Marquee autoFill className="overflow-hidden" speed={80}>
        <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-cervo font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-7xl">
          Hygiene
        </p>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" direction="right">
        <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-cervo font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-7xl">
          Meets Fun
        </p>
      </Marquee>
     <Marquee autoFill className="overflow-hidden" speed={80}>
        <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-cervo font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-7xl">
          Natural
        </p>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" direction="right">
        <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-cervo font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-7xl">
         Ingredients
        </p>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" speed={80}>
        <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-cervo font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-7xl">
          Nourish
        </p>
      </Marquee>
      <Marquee autoFill className="overflow-hidden" direction="right">
        <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-cervo font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-7xl">
          Foamy Fun
        </p>
      </Marquee>
    </section>
  );
};

export default ScrollText;
