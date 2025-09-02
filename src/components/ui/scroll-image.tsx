"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ScrollText from "../ScrollText";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageSection = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: () => window.innerHeight, // Move down exactly one screen height
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 20%", // start animation when image enters 20% of viewport
          end: "+=100%", // continue animation for full section scroll
          scrub: true, // Sync with scroll
        },
      });
    }
  }, []);

  return (
    <main className="relative w-full">
      {/* Section 1 */}

      <section className="h-screen bg-[url('/images/home_banner.jpg')] bg-no-repeat bg-center bg-cover md:py-[180px] py-22 flex flex-col md:items-center md:justify-center">
        <div className="container mx-auto md:px-0 px-3 h-full flex md:flex-row flex-col justify-between md:items-center">
          <div>
            <h1 className="md:text-[150px] md:leading-[130px] text-6xl font-normal text-dark font-Melodrama">
              <span className="-ml[28px]">Cleanse</span>
              <br />
              <span className="md:pl-12 pl-6">
                Refresh <br />
              </span>
              <span className="md:pl-12 pl-6">Repeat</span>
            </h1>
            <p className="md:text-5xl text-xl font-light text-dark uppercase md:mt-10 mt-5 md:pl-12 pl-6">
              Your daily treat!
            </p>
          </div>
          <div className="max-w-[450px] flex flex-col items-end justify-end">
            <p className="text-lg font-normal text-dark md:block hidden">
              Puritual transforms simple cleansing into pure, foamy fun — a
              joyful ritual you will love. While regular soaps just clean,
              Puritual delights you with rich lather, natural goodness of aloe
              vera and vitamin E and mood-lifting scents that make you smile.
            </p>
            <p className="text-lg font-semibold text-dark mt-6 md:block hidden">
              More than just a handwash — it’s a foamy, fragrant, feel-good
              ritual you’ll love.
            </p>
            <Link
              href="/catalog"
              className="md:text-3xl text-xl text-dark hover:text-dark font-semibold light_bubble bg-secoundry md:w-[172px] w-[94px] relative md:h-[172px] h-[94px] rounded-full flex text-center justify-center mt-10 items-center cursor-pointer transition-all duration-300 ease-linear group ml-auto md:mr-auto mr-0"
            >
              <span className="z-10">
                SHOP <br />
                NOW
              </span>
              <div className="bg-primary md:w-[172px] w-[94px] absolute md:h-[172px] h-[94px] scale-0 group-hover:scale-[1.01] transition-all duration-300 ease-linear rounded-full" />
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Image */}
      <div
        ref={imageRef}
        className="absolute md:top-[0%] top-[300px] left-1/2 -translate-x-1/2 md:z-[500] z-20"
      >
        <Image
          src="/images/main_pro.png" 
          alt="Foaming Hand Wash"
          width={400}
          height={600}
          className="drop-shadow-xl"
        />
      </div>

      {/* Section 2 */}
      <section className="md:h-screen bg-primary md:py-[180px] py-16 flex flex-col items-center justify-center">
        <div className="container mx-auto md:px-0 px-3 flex md:flex-row flex-row justify-between md:items-center ">
          <div className="md:w-1/3 w-[31%]">
            <h2 className="md:text-[100px] md:leading-[90px] text-[28px] font-light tracking-normal text-dark font-Melodrama">
              Who knew washing hands could be this much{" "}
              <span className="md:font-normal font-bold">fun?</span>
            </h2>
          </div>
          <div className="md:w-1/3 w-[38%] text-center self-end">
            <Image
              src="/images/bubbles.png" 
              alt="Foaming Hand Wash"
              width={911}
              height={640}
            />
          </div>
          <div className="md:w-1/3 w-[31%] md:text-start text-end pl-2">
            <p className="text-lg font-normal text-dark">
              With <span className="md:font-normal font-bold">Puritual</span>,
              every pump delivers rich,{" "}
              <span className="md:font-normal font-bold"> foamy goodness</span>{" "}
              that makes cleansing feel playful,{" "}
              <span className="md:font-normal font-bold"> fragrant </span>, and{" "}
              <span className="md:font-normal font-bold">
                refreshingly good
              </span>
              .
            </p>
            <p className="text-lg font-semibold text-dark mt-6 md:block hidden">
              It’s more than just clean — it’s your daily moment of care, joy,
              and soft skin.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-primary md:py-0 py-16">
        <ScrollText />
      </section>
    </main>
  );
};

export default ScrollImageSection;
