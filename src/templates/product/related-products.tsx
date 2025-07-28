import ProductLayout from "@/components/product-layout";
import WooCommerce from "@/lib/woocommerce";
import React from "react";



// Repeating Tailwind colors for borders
const colors = ["border-[#663399]", "border-[#CC6633]", "border-[#CC3366]"];

const RelatedProducts = async () => {
  const response = await WooCommerce.get("products", {
    per_page: 3,
  });
  return (
    <section className="bg-dark py-10 md:py-[120px]">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-[60px] md:text-[150px] z-[1] mb-10 relative mx-auto text-primary font-Melodrama font-normal capitalize leading-[110px]">
          Worth a try
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-[70px] gap-3 pb-10">
          {
            response?.data?.map((product: any, idx: number) => (
              <ProductLayout key={idx} product={product} BorderColor={colors[idx % colors.length]} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
