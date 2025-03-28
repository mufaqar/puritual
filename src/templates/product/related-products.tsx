import ProductLayout from "@/components/product-layout";
import WooCommerce from "@/lib/woocommerce";
import React from "react";

const RelatedProducts = async () => {
  const response = await WooCommerce.get("products", {
    per_page: 4,
  });
  return (
    <div className="bg-primary">
      <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-cervo py-10 px-3 text-dark uppercase text-center ">
        Worth a try
      </h2>
      <div className="grid grid-cols-1 max-w-[1480px] mx-auto px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-10">
            {
                response?.data?.map((product:any, idx:number)=>(
                    <ProductLayout key={idx} product={product}/>
                ))
            }
        </div>
    </div>
  );
};

export default RelatedProducts;
