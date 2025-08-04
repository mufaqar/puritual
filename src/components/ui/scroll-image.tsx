"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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
        <section className="relative w-full">
            {/* Section 1 */}
            <div className="h-screen bg-[url('/images/home_banner.jpg')] bg-no-repeat bg-center bg-cover md:py-[180px] py-22 flex flex-col items-center justify-center">
                <div className="container mx-auto md:px-0 px-3 flex md:flex-row flex-col justify-between md:items-center">
                    <div>
                        <h1 className="md:text-[150px] md:leading-[130px] text-6xl font-normal text-dark font-Melodrama">
                            Cleans<br />
                            <span className="md:pl-12 pl-6">Refresh <br /></span>
                            <span className="md:pl-12 pl-6">Repeat</span>
                        </h1>
                        <p className="md:text-4xl text-2xl font-light text-dark uppercase mt-10 md:pl-12 pl-6">Your daily treat!</p>
                    </div>
                    <div className="max-w-[450px]">
                        <p className="text-lg font-light text-dark">
                            Puritual transforms simple cleansing into pure, foamy fun — a joyful ritual you will love. While regular soaps just clean, Puritual delights you with rich lather, natural goodness of aloe vera and vitamin E and mood-lifting scents that make you smile.
                        </p>
                        <p className="text-lg font-semibold text-dark mt-6">
                            More than just a handwash — it’s a foamy, fragrant, feel-good ritual you’ll love.
                        </p>
                        <Link href="#" className="md:text-3xl text-xl text-dark hover:text-dark font-semibold light_bubble bg-secoundry md:w-[172px] w-[94px] relative md:h-[172px] h-[94px] rounded-full flex text-center justify-center mt-10 items-center cursor-pointer transition-all duration-300 ease-linear group"                                  >
                            <span className="z-10">SHOP <br/>NOW</span>
                            <div className="bg-primary md:w-[172px] w-[94px] absolute md:h-[172px] h-[94px] scale-0 group-hover:scale-[1.01] transition-all duration-300 ease-linear rounded-full" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Animated Image */}
            <div
                ref={imageRef}
                className="absolute top-[10%] left-1/2 -translate-x-1/2  md:z-[900]  z-20"
            >
                <Image
                    src="/images/main_pro.png" // Replace with your image path
                    alt="Foaming Hand Wash"
                    width={300}
                    height={600}
                    className="drop-shadow-xl"
                />
            </div>

            {/* Section 2 */}
            <div className="h-screen bg-primary md:py-[180px] py-16 flex flex-col items-center justify-center">
                <div className="container mx-auto md:px-0 px-3 flex md:flex-row flex-col justify-between md:items-center ">
                    <div className="md:w-1/3 w-full">
                        <h2 className="md:text-[100px] md:leading-[90px] text-5xl font-light tracking-normal text-dark font-Melodrama">
                            Who knew washing hands could be this much fun?
                        </h2>
                    </div>
                    <div className="md:w-1/3 w-full text-center">
                        <Image
                            src="/images/bubbles.png" // Replace with your image path
                            alt="Foaming Hand Wash"
                            width={911}
                            height={640}
                        />
                    </div>
                    <div className="md:w-1/3 w-full">
                        <p className="text-lg font-normal text-dark">
                            With Puritual, every pump delivers rich, foamy goodness that makes cleansing feel playful, fragrant, and refreshingly good.
                        </p>
                        <p className="text-lg font-semibold text-dark mt-6">
                            It’s more than just clean — it’s your daily moment of care, joy, and soft skin.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollImageSection;
