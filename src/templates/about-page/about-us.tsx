"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile"

const AboutSection = () => {
  const isMobile = useIsMobile();

  useGSAP(() => {
    gsap.utils.toArray([
      ".mission-Img",
      ".mission-text",
      ".mission-text2",
      ".mission-Img2",
      ".mission-Img3",
      ".heading2",
    ]).forEach((element: any, index) => {
      gsap.from(element, {
        x: isMobile ? (index % 2 === 0 ? -100 : 100) : 0, // Left-to-right for even indexes, right-to-left for odd
        y: isMobile ? 0 : 220, // Only apply Y animation on desktop
        opacity: 0,
        delay: 0.3,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
        },
      });
    });
  }, [isMobile]);

  return (
    <section className="pt-12 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-3 md:px-0 flex md:flex-row flex-col items-center justify-between gap-8 md:gap-14">
        <figure className="md:w-2/5 w-full">
          <Image
            src="/images/mission.png"
            alt=""
            width={665}
            height={826}
            className="md:w-[500px] w-full mission-Img mt-6 "
          />
        </figure>
        <div className="md:w-3/5 w-full text-dark mission-text">
          <p>
            Across cultures and generations, cleansing has always been more than hygiene — it’s a moment of pause, a ritual of renewal, a quiet act of self-care. At Puritual, we honor that tradition with a modern twist: rich, foamy handwashes that nourish your skin, lift your mood, and turn an everyday task into something a little magical.
          </p>
          <p>
            We believe that the simplest routines deserve joy — so we bottled it.
            Every Puritual formula is infused with the natural goodness of aloe vera and vitamin E, creating a rich lather that’s gentle, effective, and oh-so-satisfying. Our signature scents are crafted to do more than smell great — they make you feel something. Calm. Energized. Uplifted. Centered.
          </p>
          <p>
            We ditched the heavy gels, wasteful formulas, and harsh sulfates. Instead, we deliver light-as-air foam, skin-loving ingredients, and fragrance blends you’ll actually look forward to.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 flex md:flex-row flex-col gap-10 items-start mt-16">
        <Image
          src="/images/mission-1.png"
          alt=""
          width={397}
          height={296}
          className="mission-Img2 md:max-w-[397px] w-full"
        />
        <div className="text-dark max-w-[675px] mission-text">
          <h2 className="md:text-[70px] md:leading-[60px] text-[28px] font-normal tracking-normal text-dark font-Melodrama">
            Our Promise
          </h2>
          <div className="mt-5">
            <ul className="!list-disc list-inside text-xl font-medium flex flex-col gap-3">
              <li>No Sulfates, No Fuss — just clean, kind ingredients.</li>
              <li>Made to Feel Good — on your skin and in your day.</li>
              <li>Low Waste, More Washes — every pump goes further.</li>
            </ul>
            <p className="mt-5">
              So go ahead — pump, foam, smile, repeat.<br />
              Because with Puritual, cleansing isn’t just clean… It’s a ritual worth repeating
            </p>
          </div>
        </div>

      </div>

      <Image
        src="/svg/bubble.svg"
        alt=""
        width={220}
        className="absolute top-40 right-0 scroll-bubble-1 w-[80px] md:w-[220px]"
        height={220}
      />
      <div className="scroll-bubble-1 flex absolute top-60">
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]" />
        <Image
          src="/images/bubble-white.png"
          alt=""
          width={141}
          height={253}
          className=" absolute bottom-0 left-20 md:left-60 md:w-[141px]"
        />
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]" />
      </div>
    </section>
  );
};

export default AboutSection;
