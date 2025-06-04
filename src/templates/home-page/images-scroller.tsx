import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const ImagesScroller = () => {
  const [scrollDirection, setScrollDirection] = useState<any>("left");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "right" : "left");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Marquee
      autoFill
      className="overflow-hidden"
      speed={50}
      direction={scrollDirection}
    >
      <section className="flex gap-2 mr-2">
        {Slide_img?.map((item, idx) => (
          <figure key={idx}>
            <Image src={item?.img} alt="" width={348} height={575} className="w-[220px] md:w-[348px]"/>
          </figure>
        ))}
      </section>
    </Marquee>
  );
};

export default ImagesScroller;
const Slide_img = [
  {
    img: "/images/slide.png"
  },
  {
    img: "/images/slide2.png"
  },
  {
    img: "/images/slide3.png"
  },
  {
    img: "/images/slide4.png"
  },
  {
    img: "/images/slide5.png"
  },
];