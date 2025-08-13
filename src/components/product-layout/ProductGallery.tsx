"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider, { Settings } from "react-slick";

interface ImageItem {
  src: string;
  alt?: string;
}

const ProductGallery = ({ images }: { images: ImageItem[] }) => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
          <Slider {...settings}>
            {images.slice(1).map((item, idx) => (
              <div key={idx} className="px-2.5">
                <Image
                  src={item.src}
                  alt={item.src}
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </div>
            ))}
          </Slider>
        </div>
    </section>
  );
};

export default ProductGallery;
