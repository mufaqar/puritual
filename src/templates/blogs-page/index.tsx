"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import BlogsList from "./blogs-list";

const BlogsTemplate = () => {
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
        <main className="overflow-y-hidden pt-32 pb-20 bg-dark rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 overflow-y-hidden text-[14vw] font-medium md:text-[10vw] font-cervo leading-[13vw] text-primary md:leading-[8vw] text-center">
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
          {blogs?.map((item, idx) => (
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

const blogs = [
  {
    date: "24",
    month: "JUL",
    year: "2017",
    title: "A BEAUTIFUL BLOG WITH NO IMAGES REQUIRED",
    author: "Rina Chaudhary",
    readTime: "1 minute",
    comments: "0 Comments",
    description:
      "Typography is a WordPress theme created for bloggers that just want to write, without the hassle of looking for the right featured image. It has a unique design based on beautiful typography and a modern, clean layout. Simply write your content and publish, and it will handle the rest.",
    readMoreLink: "#",
    addCommentLink: "#",
  },
  {
    date: "10",
    month: "AUG",
    year: "2018",
    title: "WHY MINIMALISM IS THE BEST CHOICE FOR BLOGGERS",
    author: "John Doe",
    readTime: "2 minutes",
    comments: "5 Comments",
    description:
      "Minimalist design focuses on simplicity and readability, ensuring that your blog content is the main focus. It provides a clutter-free experience for readers and enhances engagement.",
    readMoreLink: "#",
    addCommentLink: "#",
  },
  {
    date: "15",
    month: "SEP",
    year: "2019",
    title: "THE ART OF WRITING WITHOUT DISTRACTIONS",
    author: "Jane Smith",
    readTime: "3 minutes",
    comments: "2 Comments",
    description:
      "Writing without distractions allows for deeper creativity and productivity. Discover how to optimize your workspace and writing habits for maximum efficiency.",
    readMoreLink: "#",
    addCommentLink: "#",
  },
  {
    date: "05",
    month: "OCT",
    year: "2020",
    title: "HOW TO CREATE ENGAGING CONTENT CONSISTENTLY",
    author: "Emily Johnson",
    readTime: "4 minutes",
    comments: "8 Comments",
    description:
      "Consistent content creation is key to building an audience. Learn the strategies top bloggers use to stay creative and publish regularly.",
    readMoreLink: "#",
    addCommentLink: "#",
  },
];
