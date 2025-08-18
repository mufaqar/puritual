import React from "react";
import Marquee from "react-fast-marquee";
import CircleText from "../ui/CircleText";

const ScrollText = () => {
  return (
    <section className="md:h-screen h-fit relative z-10 overflow-hidden ">
      <div className="container mx-auto md:px-0 px-3 flex flex-row justify-between items-center">
        <div className="md:space-y-4 space-y-2 md:w-1/3 w-[20%]">

          <p className="text-[#25330a36] uppercase md:text-[110px] md:leading-[110px] text-3xl">
            Hygiene
          </p>

          <p className="text-[#25330a36] uppercase md:text-[70px] md:leading-[80px] text-xl">
            Meets Fun
          </p>

          <p className="text-[#25330a36] uppercase md:text-[110px] md:leading-[110px] text-3xl">
            Natural
          </p>

          <p className="text-[#25330a36] uppercase md:text-[70px] md:leading-[80px] text-xl">
            Ingredients
          </p>

          <p className="text-[#25330a36] uppercase md:text-[110px] md:leading-[110px] text-3xl">
            Nourish
          </p>

          <p className="text-[#25330a36] uppercase md:text-[70px] md:leading-[80px] text-xl">
            Foamy Fun
          </p>
        </div>
        <div className="md:w-1/3 w-[60%] h-full">
          <div className="md:w-[200px] mx-auto md:h-[200px] w-[100px] h-[100px] pointer-events-none relative z-10">
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
                'md:text-3xl text-xl text-dark tracking-[40px] font-normal'
              ]}
            />
          </div>
        </div>
        <div className="md:space-y-4 space-y-2 md:w-1/3 w-[20%]">

          <p className="text-[#25330a36] uppercase md:text-[110px] md:leading-[110px] text-3xl">
            Hygiene
          </p>

          <p className="text-[#25330a36] uppercase md:text-[70px] md:leading-[80px] text-xl">
            Meets Fun
          </p>

          <p className="text-[#25330a36] uppercase md:text-[110px] md:leading-[110px] text-3xl">
            Natural
          </p>

          <p className="text-[#25330a36] uppercase md:text-[70px] md:leading-[80px] text-xl">
            Ingredients
          </p>

          <p className="text-[#25330a36] uppercase md:text-[110px] md:leading-[110px] text-3xl">
            Nourish
          </p>

          <p className="text-[#25330a36] uppercase md:text-[70px] md:leading-[80px] text-xl">
            Foamy Fun
          </p>
        </div>
      </div>
      {/* Circular text */}
      {/* <div className="bg-primary sm:w-[600px] w-[250px] min-h-full z-10 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 ">
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[200px] w-[100px] h-[100px] pointer-events-none z-10">
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
              'md:text-3xl text-xl text-dark tracking-[40px] font-normal'
            ]}
          />
        </div>
      </div> */}
    </section>
  );
};

export default ScrollText;
