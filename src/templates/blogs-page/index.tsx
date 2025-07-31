"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import BlogsList from "./blogs-list";

const BlogsTemplate = ({posts}:any) => {
  const timeline = gsap.timeline();
  useGSAP(() => {
    // Animate heading text
    timeline.from(".t1", {
      y: 220,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
    });
  });

  const blogRefs = useRef<any>([]);

  useEffect(() => {
    blogRefs.current.forEach((blog: any, index: number) => {
      if (blog) {
        timeline.fromTo(
          blog,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: blog,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      }
    });
  }, []);

  return (
    <>
      <section className="bg-primary w-full">
        <main className="overflow-y-hidden sm:pt-24 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 mt-8 overflow-y-hidden text-[14vw] font-medium md:text-[10vw] font-cervo leading-[13vw] text-primary md:leading-[8vw] text-center">
            {Array.from("Blogs").map((char, index) => (
              <span key={index} className="t1 uppercase">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </main>
      </section>

      <section className="pt-10 pb-20 bg-primary">
        <div className="max-w-[1280px] mx-auto px-3 grid gap-4">
          {posts?.map((item:any, idx:number) => (
            <article key={idx} ref={(el: any) => (blogRefs.current[idx] = el)}>
              <BlogsList blog={item} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogsTemplate;
