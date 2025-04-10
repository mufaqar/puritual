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
          backgroundColor: "#25330A",
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
        className="md:py-5 py-2 flex justify-between border-b border-[#70707011] items-center px-4 md:px-10 fixed w-full z-[1000] bg-transparent transition-colors duration-300"
      >
        <Logo />
        <div className="flex gap-2.5">
          <CartButton />
          <SquareButton className="hidden md:block">
            <Link href="/catalog" className="uppercase flex h-full p-2 px-[21px] pt-4 justify-center items-center text-center">
              Products
            </Link>
          </SquareButton>
          <Menu />
        </div>
      </header>
      <SideCartBar />
    </>
  );
};

export default Header;
