"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import ProductLayout from ".";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProductSliderProps {
  products: any[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
 
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings: Settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // Repeating Tailwind colors for borders
  const colors = ["border-[#663399]", "border-[#339933]", "border-[#CC3366]"];

  return (
    <section className="bg-dark py-10 md:py-[120px]">
      <div className="lg:container mx-auto px-3 relative">
        <h2 className="text-[60px] md:text-[150px] z-[1] mb-10 relative mx-auto text-primary font-Melodrama font-normal capitalize leading-[110px]">
          Our Products
        </h2>
        <Slider ref={sliderRef} {...settings}>
          {products?.map((product, idx) => (
            <div key={idx} className="p-2">
              <ProductLayout product={product} BorderColor={colors[idx % colors.length]} />
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <button
          className="button absolute top-1/2 -translate-y-1/2 -left-5 text-secoundry hover:text-primary text-3xl cursor-pointer hover:scale-125 transition-all "
          onClick={previous}
        >
          <FaChevronLeft />
        </button>
        <button
          className="button absolute top-1/2 -translate-y-1/2 -right-5 text-secoundry hover:text-primary text-3xl cursor-pointer hover:scale-125 transition-all "
          onClick={next}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;
