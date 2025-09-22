import React from "react";
import Image from "next/image";

const ScrollText = () => {
  return (
    <div className="container mx-auto md:px-3 px-3 flex flex-row justify-between items-center pb-8">
      <div className="md:w-[25%] w-[20%] flex items-center md:justify-start justify-center">
         <Image src="/images/hygiene.png" alt="hygiene" width={1000} height={1634} className="opacity-30" />
      </div>
      <div className="md:w-[50%] w-[60%] h-full">
        <div className="pointer-events-none relative z-10 flex items-center justify-center">
          <Image
            src="/images/scroll_circle.png"
            alt="Scroll Circle"
            width={500}
            height={500}
            className="animate-rotate-smooth"
          />
        </div>
      </div>
      <div className="md:w-[25%] w-[20%] flex items-center md:justify-end justify-center">
        <Image src="/images/hygiene.png" alt="hygiene" width={1000} height={1634} className="opacity-30" />
      </div>
    </div>
  );
};

export default ScrollText;
