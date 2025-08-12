"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./logo";
import CartButton from "./cart-button";
import SquareButton from "../ui/circle-button";
import Menu from "./menu";
import SideCartBar from "../side-cart-bar/side-cart-bar";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    ScrollTrigger.create({
      start: 0, // Trigger once scroll passes 20px
      onEnter: () => {
        gsap.to(header, {
          backgroundColor: "#DCEFB2",
          duration: 0.1,
        });
      },
      onLeaveBack: () => {
        gsap.to(header, {
          backgroundColor: "transparent",
          duration: 0.1,
        });
      },
    });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="md:py-3 py-2 fixed w-full z-[900] bg-transparent transition-colors duration-300"
      >
        <div className="container mx-auto px-3 flex justify-between items-center">
          <Logo />
          <div className="flex items-center md:gap-8 gap-2.5">
            <CartButton />
            <ul className="flex md:flex-row flex-col items-center">
              <li>
                <Link href="/sign-in">Sign In</Link>
              </li>
              <li className="sm:block hidden"> / </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </ul>
            <Menu />
          </div>
        </div >
      </header>
      <SideCartBar />
    </>
  );
};

export default Header;
