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

  // Step 1: Get current product with related_ids
  WooCommerce.get(`products/${productId}`)
    .then((res) => {
      const relatedIds = res.data.related_ids || [];

      if (relatedIds.length) {
        // Step 2: Fetch related products
        return WooCommerce.get("products", {
          include: relatedIds.join(","), // API accepts comma-separated IDs
        });
      }
    })
    .then((relatedRes) => {
      if (relatedRes) {
        // 🔥 Remove the current product from related list
        const filtered = relatedRes.data.filter(
          (product: any) => product.id !== productId
        );
         setProducts(filtered.slice(0, 3));
      }
    })
    .catch((err) => console.error(err));
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
