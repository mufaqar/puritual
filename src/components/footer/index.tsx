import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="">
      <section className="bg-dark py-[68px] lg:px-10 px-4">
        <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-0 container mx-auto">
          <nav className="text-primary flex flex-col gap-4 md:justify-start justify-center">
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

          <nav className="text-pure flex justify-center flex-col items-center gap-4 md:order-2 order-3 ">
            <div className=" flex justify-center md:justify-end gap-4 lg:gap-8 text-lg lg:text-[26px]">
              <Link href="https://www.facebook.com/profile.php?id=61573850430062&rdid=TjDPWDoJiM2zrhOy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16N2cgBjq1%2F" target="_blank" className="bg-white text-dark rounded-md py-2 px-2 hover:scale-105 transition-all duration-300">
                <FaFacebookF />
              </Link>
              <Link href="https://www.tiktok.com/@puritualofficial?_t=ZS-8wDErVQexgw&_r=1" target="_blank" className="bg-white text-dark rounded-md py-2 px-2 hover:scale-105 transition-all duration-300">
                <FaTiktok />
              </Link>
              <Link href="https://www.instagram.com/puritualofficial?igsh=MW1wOXoxaWZrMjB6Zg%3D%3D" target="_blank" className="bg-white text-dark rounded-md py-2 px-2 hover:scale-105 transition-all duration-300">
                <FaInstagram />
              </Link>
            </div>
            <p className="text-primary font-light ">© Copyright 2026, Puritual</p>
          </nav>

          <nav className="text-primary flex justify-center flex-col gap-4 md:order-3 order-2">
            <Link href="/faqs" className="hover:text-pure">
              Faq
            </Link>
            <Link href="/terms-conditions" className="hover:text-pure">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-pure">
              Privacy Policy
            </Link>
            <Link href="/order-tracking" className="hover:text-pure">
              Order Tracking
            </Link>
          </nav>
        </div>

      </section>

      <div className="bg-dark px-4 md:px-10">
        <div className="flex justify-center">
          <Image src="/images/footer-logo.png" alt="footer-logo" width={1436} height={250} className="w-full max-w-[900px] h-auto " />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
