import React from "react";

const ScrollText = () => {
  return (
    <section className="rotate-[-5deg]">
      <p className="text-stroke text-[157px] uppercase scroll-content1 !duration-[40s]">
        ORGANIC GOODNESS
      </p>
      <p className="text-secoundry flex gap-40 text-[157px] font-cervo font-medium text-nowrap uppercase scroll-content2">
        <span>SAFE INGREDIENTS</span>
        <span>ORGANIC PRODUCTS</span>
      </p>
      <div className="flex gap-20 text-nowrap uppercase items-center font-cervo scroll-content3 translate-x-[-300px]">
        <p className="text-dark text-[157px] font-medium">LUXURY MEETS FUN</p>
        <p className="text-stroke text-[157px]">NOURISH</p>
      </div>
      <div className="flex gap-20 text-nowrap uppercase items-center font-cervo scroll-content1 translate-x-[-300px]">
        <p className="text-stroke text-[157px]">hydration</p>
        <p className="text-dark text-[157px] font-medium">NATURALLY</p>
      </div>
      <p className="text-stroke text-[157px] uppercase scroll-content4 !duration-[40s]">
      NATURALLY
      </p>
    </section>
  );
};

export default ScrollText;
