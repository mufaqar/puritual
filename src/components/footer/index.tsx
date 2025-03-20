import React from "react";
import Logo from "../header/logo";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <section className="bg-dark py-[68px] grid grid-cols-3 items-center container mx-auto px-10 rounded-t-[60px]">
        <nav className="text-white/50 flex gap-10">
          <Link href="#" className="hover:text-pure">
            About
          </Link>
          <Link href="#" className="hover:text-pure">
            Products
          </Link>
          <Link href="#" className="hover:text-pure">
            Contact
          </Link>
        </nav>
        <div className="flex justify-center">
          <Logo />
        </div>
        <nav className="text-pure flex justify-end gap-8 text-[26px]">
          <Link href="#">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaLinkedinIn />
          </Link>
          <Link href="#">
            <FaTwitter />
          </Link>
          <Link href="#">
            <FaYoutube />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
        </nav>
      </section>
      <div className="bg-dark px-10">
        <div className="pt-6 flex justify-between items-center gap-5 pb-[68px] border-t border-[#33450d]">
          <p className="text-white/50 font-light">© Copyright 2026, Puritual</p>
          <nav className="text-white/50 flex gap-4 font-light">
            <Link href="#" className="hover:text-pure">
              Sitemap
            </Link>
            <p>-</p>
            <Link href="#" className="hover:text-pure">
              Terms & Conditions
            </Link>
            <p>-</p>
            <Link href="#" className="hover:text-pure">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
