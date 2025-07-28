"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const Menu = () => {
  const [isMenu, setIsMenu] = useState(false);
  const menuRef = useRef<any>(null);
  const linksRef = useRef<any>([]);

  useGSAP(() => {
    if (isMenu) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, top: "-20%", right: "-20%", width: "80px", height: "80px", borderRadius: "50%" },
        { opacity: 1, top: 0, right: 0, maxWidth: "438px", width: "100%", minHeight: "458px", borderRadius: "0%", duration: 0.5, ease: "power2.out" }
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
      <button onClick={handleMenu} className="dark_bubble bg-dark group relative md:w-[81px] md:h-[81px] w-[46px] h-[46px] z-[90] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ease-linear">
        {!isMenu ? (
          <HiOutlineBars3 className="text-4xl text-white relative z-[100]" />
        ) : (
          <IoCloseOutline className="text-4xl text-white relative z-[100]" />
        )}

        <div className="bg-primary md:w-[81px] absolute md:h-[81px] w-[46px] h-[46px] scale-0 group-hover:scale-[1.01] transition-all duration-300 ease-linear rounded-full" />
      </button>


      {/* MENU */}
      <div
        ref={menuRef}
        className="absolute bg-secoundry top-0 right-0 md:pl-20 !rounded-bl-[50px] z-50 p-10 pt-20 opacity-0 w-0 h-0"
      >
        <nav className="flex flex-col text-5xl font-cervo font-medium">
          {menuItems?.map((text: any, i: number) => (
            <Link
              key={i}
              href={text?.path}
              ref={(el: any) => (linksRef.current[i] = el)}
              onClick={() => setIsMenu(!isMenu)}
              className="leading-14 hover:text-primary opacity-0 text-dark w-fit"
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
  { id: 1, label: "Home", path: "/home" },
  { id: 2, label: "Products", path: "/catalog" },
  { id: 3, label: "About Us", path: "/about-us" },
  { id: 4, label: "Blogs", path: "/blogs" },
  { id: 5, label: "FAQ", path: "/faqs" },
  { id: 6, label: "Contacts", path: "/contact-us" },
];