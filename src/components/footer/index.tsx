import React from "react";
import Logo from "../header/logo";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <section className="bg-dark py-[68px] rounded-t-[60px] lg:px-10 px-4">
        <div className="grid md:grid-cols-3 gap-6 md:gap-0 container mx-auto items-center">
          <nav className="text-white/50 flex gap-4 lg:gap-10 md:justify-start justify-center">
            <Link href="/about-us" className="hover:text-pure">
              About
            </Link>
            <Link href="/catalog" className="hover:text-pure">
              Products
            </Link>
            <Link href="/contact-us" className="hover:text-pure">
              Contact
            </Link>
          </nav>
          <div className="flex justify-center">
            <Logo />
          </div>
          <nav className="text-pure flex justify-center md:justify-end gap-4 lg:gap-8 text-lg lg:text-[26px]">
            <Link href="https://www.facebook.com/profile.php?id=61573850430062&rdid=TjDPWDoJiM2zrhOy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16N2cgBjq1%2F" target="_blank">
              <FaFacebookF />
            </Link>
            <Link href="https://www.tiktok.com/@puritualofficial?_t=ZS-8wDErVQexgw&_r=1" target="_blank">
              <FaTiktok />
            </Link>
            <Link href="https://www.instagram.com/puritualofficial?igsh=MW1wOXoxaWZrMjB6Zg%3D%3D" target="_blank">
              <FaInstagram />
            </Link>
          </nav>
        </div>
      </section>

      <div className="bg-dark px-4 md:px-10">
        <div className="pt-6 flex flex-col-reverse md:flex-row justify-between container mx-auto px-4 items-center lg:px-0 gap-5 pb-[68px] border-t border-[#33450d]">
          <p className="text-white/50 font-light">© Copyright 2026, Puritual</p>
          <nav className="text-white/50 flex justify-center flex-wrap gap-2 md:gap-4 font-light">
            <Link href="/faqs" className="hover:text-pure">
              Faq
            </Link>
            <p>-</p>
            <Link href="/terms-conditions" className="hover:text-pure">
              Terms & Conditions
            </Link>
            <p>-</p>
            <Link href="/privacy-policy" className="hover:text-pure">
              Privacy Policy
            </Link>
            <p>-</p>
            <Link href="/order-tracking" className="hover:text-pure">
              Order Tracking
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
