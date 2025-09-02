"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import CircleButton from "../ui/circle-button";

const Menu = () => {
  const [isMenu, setIsMenu] = useState(false);
  const menuRef = useRef<any>(null);
  const linksRef = useRef<any>([]);

  useGSAP(() => {
    if (isMenu) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, top: "-20%", right: "-20%", width: "80px", height: "80px", borderRadius: "50%" },
        { opacity: 1, top: 0, right: 0, maxWidth: "438px", width: "100%", minHeight: "558px", borderRadius: "0%", duration: 0.5, ease: "power2.out" }
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
      {/* Overlay for outside click (optional, improves UX) */}
      {isMenu && (
        <div onClick={() => setIsMenu(false)} className="fixed inset-0 bg-transparent z-[800]" />
      )}
      <CircleButton onClick={handleMenu} className="dark_bubble bg-dark md:!w-[81px] md:!h-[81px] !w-[46px] !h-[46px] z-[900]" BgHovr="bg-secoundry md:!w-[81px] md:!h-[81px] !w-[46px] !h-[46px] ">
        {!isMenu ? (
          <HiOutlineBars3 className="sm:text-4xl text-2xl text-white relative z-[800]" />
        ) : (
          <IoCloseOutline className="sm:text-4xl text-2xl text-white relative z-[800]" />
        )}
      </CircleButton>


      {/* MENU */}
      <div
        ref={menuRef}
        className="absolute bg-secoundry top-0 right-0 md:pl-20 !rounded-bl-[50px] z-[800] p-10 pt-24 opacity-0 w-0 h-0"
      >
        <nav className="flex flex-col gap-2.5 sm:text-5xl text-3xl font-medium">
          {menuItems?.map((text: any, i: number) => (
            <Link
              key={i}
              href={text?.path}
              ref={(el: any) => (linksRef.current[i] = el)}
              onClick={() => setIsMenu(!isMenu)}
              className="sm:leading-14 hover:text-primary opacity-0 font-Melodrama text-dark w-fit"
            >
              {text?.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Menu;


const menuItems = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Products", path: "/catalog" },
  { id: 3, label: "About Us", path: "/about-us" },
  { id: 4, label: "Blogs", path: "/blogs" },
  { id: 5, label: "FAQ", path: "/faqs" },
  { id: 6, label: "Contacts", path: "/contact-us" },
];