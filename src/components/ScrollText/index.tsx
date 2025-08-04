import React from "react";
import Marquee from "react-fast-marquee";
import CircleText from "../ui/CircleText";

const ScrollText = () => {
  return (
    <section className="md:h-screen h-fit relative z-10 overflow-y-visible overflow-x-hidden">
      <div className="space-y-6 ">
        <Marquee autoFill className="overflow-hidden" speed={80}>
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-5xl">
            Hygiene
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" direction="right">
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-3xl">
            Meets Fun
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" speed={80}>
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-5xl">
            Natural
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" direction="right">
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-3xl">
            Ingredients
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" speed={80}>
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[150px] md:leading-[130px] text-5xl">
            Nourish
          </p>
        </Marquee>
        <Marquee autoFill className="overflow-hidden" direction="right">
          <p className="text-[#25330a36] flex gap-40 mr-14 md:mr-40 font-medium text-nowrap uppercase md:text-[90px] md:leading-[90px] text-3xl">
            Foamy Fun
          </p>
        </Marquee>
      </div>
      {/* Circular text */}
      <div className="bg-primary sm:w-[600px] w-[250px] min-h-full z-10 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 ">
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[200px] w-[100px] h-[100px] pointer-events-none z-10">
          <CircleText
            text={[
              'PODEMOS DE VERDADE! PODEMOS DE VERDADE!',
              'NATURAL HYDRATION · ORGANIC GOODNESS · PUMP · FOAM · SMILE · REPEAT ·',
            ]}
            radius={[150, 250]}
            reverse={[false, false]}
            className={['', '']}
            textClass={[
              'md:text-2xl text-xl text-dark tracking-widest font-normal',
              'md:text-4xl text-xl text-dark tracking-[40px] font-normal'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollText;
