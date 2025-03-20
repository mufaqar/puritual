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
        {[1, 2, 3, 4, 5, 6]?.map((item, idx) => (
          <figure key={idx}>
            <Image src="/images/leaf.png" alt="" width={348} height={575} />
          </figure>
        ))}
      </section>
    </Marquee>
  );
};

export default ImagesScroller;
