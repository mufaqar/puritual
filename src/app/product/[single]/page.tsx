import React from "react";
import WooCommerce from "@/lib/woocommerce";
import ProductTemplate from "@/templates/product";

const SingleProduct = async ({ params }: any) => {
  const { single } = await params;
  const response = await WooCommerce.get("products", {
    slug: single,
  });

  if(response?.data?.length <= 0){
    return (
        <div className="h-screen w-full flex items-center font-cervo bg-primary text-6xl justify-center text-dark uppercase text-center">Item Not Found</div>
    )
  }

  return (
    <>
      <ProductTemplate product={response.data[0]}/>
    </>
  );
};

export default SingleProduct;
