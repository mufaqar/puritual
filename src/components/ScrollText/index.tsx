import React from "react";
import CircleText from "../ui/CircleText";

const ScrollText = () => {
  return (
      <div className="container mx-auto md:px-3 px-3 flex flex-row justify-between items-center">
        <div className="md:space-y-4 space-y-2 md:w-fit w-[20%]">

          <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-xl">
            Hygiene
          </p>

          <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-[15px]">
            Meets Fun
          </p>

          <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-xl">
            Natural
          </p>

          <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-[15px]">
            Ingredients
          </p>

          <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-xl">
            Nourish
          </p>

          <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-[15px]">
            Foamy Fun
          </p>
        </div>
        <div className="md:w-fit w-[60%] h-full">
          <div className="md:w-[200px] mx-auto md:h-[200px] w-[90px] h-[90px] pointer-events-none relative z-10">
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
        <div className="md:space-y-4 space-y-2 md:w-fit w-[20%]">

          <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-xl">
            Hygiene
          </p>

          <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-[15px]">
            Meets Fun
          </p>

          <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-xl">
            Natural
          </p>

          <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-[15px]">
            Ingredients
          </p>

          <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-xl">
            Nourish
          </p>

          <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-[15px]">
            Foamy Fun
          </p>
        </div>
      </div>
        );
};

export default ScrollText;
