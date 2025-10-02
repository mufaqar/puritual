"use client";

import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import WooCommerce from "@/lib/woocommerce";
import ProductLayout from "@/components/product-layout";

// Tailwind border colors
const colors = ["border-[#663399]", "border-[#CC6633]", "border-[#CC3366]"];

const RelatedProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    WooCommerce.get("products", { per_page: 3 })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="bg-dark py-10 md:py-[120px]">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-[60px] md:text-[150px] z-[1] mb-10 relative mx-auto text-primary font-Melodrama font-normal capitalize leading-[110px]">
          Worth a try
        </h2>

        <Slider {...settings}>
          {products.map((product, idx) => (
            <div key={product.id} className="px-2.5">
              <ProductLayout
                product={product}
                BorderColor={colors[idx % colors.length]}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RelatedProducts;
