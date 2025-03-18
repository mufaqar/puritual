"use client";
import React, { useState, useRef } from "react";
import SquareButton from "../ui/square-button";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Menu = () => {
  const [isMenu, setIsMenu] = useState(false);
  const menuRef = useRef<any>(null);
  const linksRef = useRef<any>([]);

  useGSAP(() => {
    if (isMenu) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, top: "-20%", right: "-20%", width: "80px", height: "80px", borderRadius: "50%" },
        { opacity: 1, top: 0, right: 0, width: "438px", height: "458px", borderRadius: "0%", duration: 0.5, ease: "power2.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    } else {
      gsap.to(linksRef.current, {
        opacity: 0,
        y: 20,
        stagger: -0.1,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(menuRef.current, {
            opacity: 0,
            top: "-20%",
            right: "-20%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            duration: 0.4,
            ease: "power2.in",
          });
        },
        
      });
    }
  }, [isMenu]);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      <SquareButton onClick={handleMenu} className="z-[60]">
        <div className="p-[14px]">
          <svg width="26.667" height="26.667" viewBox="0 0 26.667 26.667">
            <path
              d="M8,16H24v2.667H8ZM8,8H24v5.333H8ZM8,21.333H20V24H8ZM2.667,2.667V29.334H24A5.349,5.349,0,0,0,29.333,24V2.668H2.666ZM24,26.667H5.333V5.334H26.666V24A2.675,2.675,0,0,1,24,26.668Z"
              transform="translate(-2.666 -2.667)"
              fill="#25330a"
            />
          </svg>
        </div>
      </SquareButton>

      {/* MENU */}
      <div
        ref={menuRef}
        className="absolute bg-secoundry top-0 right-0 pl-20 !rounded-bl-[50px] z-50 p-10 pt-20 opacity-0 w-0 h-0"
      >
        <nav className="flex flex-col text-5xl font-cervo font-medium">
          {["Home", "About Us", "Flavor map", "Where to buy?", "FAQ", "Contacts"].map((text, i) => (
            <Link
              key={text}
              href="#"
              ref={(el:any) => (linksRef.current[i] = el)}
              className="leading-14 hover:text-primary opacity-0 text-dark w-fit"
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Menu;
