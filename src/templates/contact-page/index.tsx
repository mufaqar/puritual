"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";
import ContactForm from "./contact-form";

const ContactTemplate = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    // Animate heading text
    timeline.from(".t1", {
      y: 220,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate number & email
    timeline.from(
      ".contact-item",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      },
      "-=0.5"
    ); // Starts animation slightly before previous ends

    timeline.from(".t2", {
        y: 220,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });
  });


  return (
    <>
      <section className="bg-primary w-full">
        <main className="overflow-y-hidden sm:pt-24 pt-26 pb-10 sm:pb-20 bg-secoundry rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 overflow-y-hidden text-[14vw] font-medium md:text-[10vw] font-cervo leading-[13vw] text-primary md:leading-[8vw] text-center">
            {Array.from("Contacts").map(
              (char, index) => (
                <span key={index} className="t1 uppercase">
                  {char === " " ? "\u00A0" : char}
                </span>
              )
            )}
          </h1>

          {/* Contact Information */}
          <div className="font-cervo text-center text-primary text-3xl sm:text-5xl md:text-6xl mb-5 mt-6 md:mt-20 uppercase">
            <div className="contact-item sm:mb-4">
              <Link href="tel:+923444443442" target="_blank" className="hover:underline w-fit">
              +923444443442
              </Link>
            </div>
            <div className="contact-item">
              <Link href="mailto:info@puritualofficial.com" target="_blank" className="hover:underline w-fit">
              info@puritualofficial.com
              </Link>
            </div>
          </div>
        </main>
      </section>

      <section className="pt-10 pb-20 bg-primary">
        <h2 className="flex justify-center mb-8 flex-wrap px-10 overflow-y-hidden text-[14vw] font-medium md:text-[5vw] font-cervo leading-[13vw] text-dark md:leading-[8vw] text-center">
          {Array.from("HAVE A QUESTION? THERE ARE ANSWERS TOO!").map(
            (char, index) => (
              <span key={index} className="t2">
                {char === " " ? "\u00A0" : char}
              </span>
            )
          )}
        </h2>
        <div className="max-w-[1280px] mx-auto px-3">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactTemplate;
