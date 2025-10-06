"use client";

import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import WooCommerce from "@/lib/woocommerce";
import ProductLayout from "@/components/product-layout";

interface RelatedProductsProps {
  productId: number; // 👈 Pass current product ID as prop
}

// Tailwind border colors
const colors = ["border-[#663399]", "border-[#CC6633]", "border-[#CC3366]"];

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  const [products, setProducts] = useState<any[]>([]);



useEffect(() => {
  if (!productId) return;

  let isMounted = true;

  const fetchRelatedProducts = async (retryCount = 0) => {
    try {
      const res = await WooCommerce.get(`products/${productId}`);
      const relatedIds = res.data?.related_ids || [];

      if (relatedIds.length === 0) return;

      const relatedRes = await WooCommerce.get("products", {
        include: relatedIds.join(","),
      });

      if (isMounted && relatedRes?.data) {
        const filtered = relatedRes.data.filter(
          (product: any) => product.id !== productId
        );
        setProducts(filtered.slice(0, 3));
      }
    } catch (error) {
      console.error("Error loading related products:", error);

      // Retry logic (max 3 attempts)
      if (retryCount < 3) {
        setTimeout(() => fetchRelatedProducts(retryCount + 1), 1500);
      }
    }
  };

  // Delay a bit to ensure productId is fully ready (especially on hydration)
  const timeoutId = setTimeout(() => {
    fetchRelatedProducts();
  }, 300);

  return () => {
    isMounted = false;
    clearTimeout(timeoutId);
  };
}, [productId]);

 

  return (
    <section className="bg-dark py-10 md:py-[120px]">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-[60px] md:text-[150px] z-[1] mb-10 relative mx-auto text-primary font-Melodrama font-normal capitalize leading-[110px]">
          Worth a try
        </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-[70px] gap-3">
          {products.map((product, idx) => (
            <div key={product.id} className="px-2.5">
              <ProductLayout
                product={product}
                BorderColor={colors[idx % colors.length]}
              />
            </div>
          ))}
           </div>
     
      </div>
    </section>
  );
};

export default RelatedProducts;
