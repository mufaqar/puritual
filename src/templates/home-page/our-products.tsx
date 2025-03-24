import ProductLayout from "@/components/product-layout";
import React from "react";

const OurProducts = () => {
  return (
    <section className="bg-primary py-[75px]">
      <div className="lg:container mx-auto px-3">
        <h2 className="text-[60px] md:text-[120px] z-[1] mb-10 relative mx-auto text-dark text-center font-cervo font-medium uppercase leading-[110px]">
            OUR PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {
                [1,2,3,4,5]?.map((product, idx)=>(
                    <ProductLayout key={idx} data={product}/>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
