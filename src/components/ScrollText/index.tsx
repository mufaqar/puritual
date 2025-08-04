import React from "react";
import Marquee from "react-fast-marquee";
import CircleText from "../ui/CircleText";

const ScrollText = () => {
  return (
    <section className="h-screen relative z-10 overflow-y-visible overflow-x-hidden">
      <div className="space-y-6 ">
        <Marquee autoFill className="overflow-hidden" speed={80}>
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-7xl">
            Hygiene
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" direction="right">
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-7xl">
            Meets Fun
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" speed={80}>
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-7xl">
            Natural
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" direction="right">
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-7xl">
            Ingredients
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" speed={80}>
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-7xl">
            Nourish
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" direction="right">
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-7xl">
            Foamy Fun
          </p>
        </Marquee>
      </div>
      {/* Circular text */}
      <div className="bg-primary w-[600px] min-h-full z-10 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 ">
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[200px] w-[160px] h-[160px] pointer-events-none z-10">
          <CircleText
            text={[
              'PODEMOS DE VERDADE! PODEMOS DE VERDADE!',
              'NATURAL HYDRATION · ORGANIC GOODNESS · PUMP · FOAM · SMILE · REPEAT ·',
            ]}
            radius={[150, 250]}
            reverse={[false, false]}
            className={['', '']}
            textClass={[
              'text-2xl text-dark tracking-widest font-normal',
              'text-4xl text-dark tracking-[40px] font-normal'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollText;
