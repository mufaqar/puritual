"use client";
import CircleButton from "@/components/ui/circle-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile"
import Link from "next/link";

const TermsSection = () => {
  const isMobile = useIsMobile();

  useGSAP(() => {
    gsap.utils.toArray([
      ".mission-text",
    ]).forEach((element: any, index) => {
      gsap.from(element, {
        x: isMobile ? (index % 2 === 0 ? -100 : 100) : 0, // Left-to-right for even indexes, right-to-left for odd
        y: isMobile ? 0 : 220, // Only apply Y animation on desktop
        opacity: 0,
        delay: 0.3,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
        },
      });
    });
  }, [isMobile]);

  return (
    <section className="pt-12 pb-20 relative overflow-x-hidden">
      <div className="px-4 md:px-0 max-w-[1280px] mx-auto">
        <div className="font-axiforma text-dark mission-text">
          <h3 className="text-2xl my-4">Introduction</h3>
          <p>Putitual is proud to bring you premium personal care products designed to elevate your daily routine. Our aim is to make every wash a delightful experience. Please read these terms carefully before using our services.</p>

          <h3 className="text-2xl my-4">Eligibility</h3>
          <p>By using this website, you confirm that you are at least 18 years old or are using the website under the supervision of a parent or legal guardian.</p>

          <h3 className="text-2xl my-4"> Use of Our Website</h3>
          <p>You agree to:</p>

          <p>Use the website for lawful purposes only.</p>

          <p>Not engage in any activity that disrupts or interferes with the website.</p>

          <p>Not attempt to gain unauthorized access to any portion or feature of the website.</p>

          <h3 className="text-2xl my-4"> Product Information</h3>
          <p>We strive to ensure that all product descriptions, pricing, and availability are accurate. However, we do not guarantee that the information on our website is always current or error-free. Putitual reserves the right to correct any errors and to change or update information at any time without prior notice.</p>

          <h3 className="text-2xl my-4">Orders and Payments</h3>
          <p>All orders placed through the website are subject to acceptance and availability.</p>

          <p>We reserve the right to refuse or cancel any order for any reason.</p>

          <p>Prices are subject to change without notice.</p>

          <p>Payment must be made in full at the time of ordering.</p>

          <h3 className="text-2xl my-4">Shipping and Returns</h3>
          <p>Please refer to our Shipping & Returns Policy for information about delivery times, shipping costs, and return eligibility.</p>

          <h3 className="text-2xl my-4">Intellectual Property</h3>
          <p>All content on the Putitual website, including images, text, logos, and designs, is the property of Putitual and is protected by applicable intellectual property laws. You may not use, copy, or distribute any content without prior written consent.</p>

          <h3 className="text-2xl my-4">Limitation of Liability</h3>
          <p>Putitual shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our website or products.</p>

          <h3 className="text-2xl my-4">Privacy Policy</h3>
          <p>Your use of our website is also governed by our Privacy Policy, which can be found <Link href="/privacy-policy">www.puritualofficial.com/privacy-policy</Link>.</p>

          <h3 className="text-2xl my-4">Changes to Terms</h3>
          <p>We may update these Terms from time to time. Changes will be posted on this page with an updated May 8, 2025. Continued use of the website after changes constitutes acceptance of the revised Terms.</p>

          <h3 className="text-2xl my-4">Contact Us</h3>
          <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
          <ul className="space-y-2 my-3">
            <li><strong>Email:</strong> <Link href="mailto:info@puritualofficial.com" target="_blank">info@puritualofficial.com</Link></li>
            <li><strong>Phone:</strong> <Link href="tel:+923444443442" target="_blank">+923444443442</Link></li>
            <li><strong>Address:</strong> Lahore, Pakistan</li>
          </ul>
        </div>
      </div>


      <Image
        src="/svg/bubble.svg"
        alt=""
        width={220}
        className="absolute top-40 right-0 scroll-bubble-1 w-[80px] md:w-[220px]"
        height={220}
      />
      <div className="scroll-bubble-1 flex absolute top-60">
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]" />
        <Image
          src="/images/bubble-white.png"
          alt=""
          width={141}
          height={253}
          className=" absolute bottom-0 left-20 md:left-60 md:w-[141px]"
        />
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]" />
      </div>
    </section>
  );
};

export default TermsSection;
