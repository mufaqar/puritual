import ProductLayout from "@/components/product-layout";
import { OurProductsProps } from "@/lib/productInterface";
import React from "react";

  // Repeating Tailwind colors for borders
  const colors = ["border-[#663399]", "border-[#339933]", "border-[#CC3366]", "border-[#CCCC33]", "border-[#CC6633]"];

const OurProducts: React.FC<OurProductsProps> = ({ products }) => {
  return (
     <section className="bg-dark py-10 md:py-[120px]">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-[60px] md:text-[150px] z-[1] mb-10 relative mx-auto text-primary font-Melodrama font-normal capitalize leading-[110px]">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-[70px] gap-3">
          {products?.map((product:any, idx:number) => (            
            <ProductLayout key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
