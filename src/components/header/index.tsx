"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./logo";
import CartButton from "./cart-button";
import SquareButton from "../ui/square-button";
import Menu from "./menu";
import SideCartBar from "../side-cart-bar/side-cart-bar";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    ScrollTrigger.create({
      start: 20, // Trigger once scroll passes 20px
      onEnter: () => {
        gsap.to(header, {
          backgroundColor: "#DCEFB2",
          duration: 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to(header, {
          backgroundColor: "transparent",
          duration: 0.3,
        });
      },
    });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="md:py-3 py-2 flex justify-between items-center px-4 md:px-10 fixed w-full z-[1000] bg-transparent transition-colors duration-300"
      >
        <Logo />
        <div className="flex items-center md:gap-[102px] gap-2.5">
          <CartButton />
          <Menu />
        </div>
      </header>
      <SideCartBar />
    </>
  );
};

export default Header;
