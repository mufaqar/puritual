import React from "react";
import CircleText from "../ui/CircleText";
import Image from "next/image";

const ScrollText = () => {
  return (
    <div className="container mx-auto md:px-3 px-3 flex flex-row justify-between items-center">
      <div className="md:space-y-4 space-y-2 md:w-fit w-[20%]">
        <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-base">
          Hygiene
        </p>

        <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-xs">
          Meets Fun
        </p>

        <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-base">
          Natural
        </p>

        <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-xs">
          Ingredients
        </p>

        <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-base">
          Nourish
        </p>

        <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-xs">
          Foamy Fun
        </p>
      </div>
      <div className="md:w-fit w-[60%] h-full">
        <div className="pointer-events-none relative z-10">
          <Image
            src="/images/scroll_circle.png"
            alt="Scroll Circle"
            width={500}
            height={500}
            className="animate-rotate-smooth"
          />
        </div>
      </div>
      <div className="md:space-y-4 space-y-2 md:w-fit w-[20%]">
        <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-base">
          Hygiene
        </p>

        <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-xs">
          Meets Fun
        </p>

        <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-base">
          Natural
        </p>

        <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-xs">
          Ingredients
        </p>

        <p className="text-[#25330a36] uppercase font-semibold md:text-[80px] md:leading-[90px] text-base">
          Nourish
        </p>

        <p className="text-[#25330a36] uppercase font-normal md:text-[60px] md:leading-[70px] text-xs">
          Foamy Fun
        </p>
      </div>
    </div>
  );
};

export default ScrollText;
