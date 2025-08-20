"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";

const TermsSection: React.FC = () => {
  const isMobile = useIsMobile();

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".mission-text").forEach((element, index) => {
      gsap.from(element, {
        x: isMobile ? (index % 2 === 0 ? -100 : 100) : 0,
        y: isMobile ? 0 : 220,
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
    <section className="pt-12 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-3 md:px-0">
        <div className="text-dark mission-text">
          <p>
            Welcome to Puritual! These Terms and Conditions outline the rules and regulations for using our website and purchasing our products. By visiting our website or placing an order, you agree to the following terms:
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Order Acceptance</h3>
          <p>
            All orders are subject to availability and acceptance. If a product you ordered is out of stock, we will notify you via email. You may choose to wait for restocking or cancel the order for a full refund.
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Pricing & Payment</h3>
          <p>
            Prices listed include all applicable taxes unless otherwise stated. Prices are subject to change without notice. You’ll always see the latest prices during checkout. By placing an order, you confirm that the payment details you provide are accurate and that you're authorized to use the selected payment method.
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Shipping & Delivery</h3>
          <p>
            We aim to dispatch orders within 2–3 business days. Delivery times may vary depending on your location and the courier. While we strive to deliver on time, we are not liable for delays caused by factors outside our control. We'll always do our best to keep you informed and get your package to you as quickly as possible.
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Returns & Refunds</h3>
          <p>
            Not in love with your order? You can return any unused item in its original packaging within 7 days for a refund or exchange. Please note:
          </p>
          <p>
            Due to hygiene purpose, we don’t accept returns or exchanges of used or opened products.
            Sale items are non-returnable unless you received the wrong or damaged product.
            Return shipping costs are the customer’s responsibility and are non-refundable.
            If a refund is issued, any return shipping and COD charges (if applicable) will be deducted.
          </p>
          <p>
            To initiate a return, contact our customer support team for instructions at <Link href="mailto:support@puritualofficial.com" target="_blank">support@puritualofficial.com</Link>
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Product Descriptions</h3>
          <p>
            We do our best to ensure our product descriptions and images are as accurate as possible. However, slight variations may occur.
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Limitation of Liability</h3>
          <p>
            Puritual is not responsible for indirect, incidental, or consequential damages related to the use or misuse of our products. Our liability is limited to the value of the item purchased.
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Governing Law</h3>
          <p>
            These terms are governed by the laws of Pakistan. Any disputes arising from these terms or your use of our website will be handled in the courts located in our jurisdiction.
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Intellectual Property</h3>
          <p>
            All content on this website—including logos, text, graphics, and images—is the property of Puritual and is protected by copyright and trademark laws. You may not use, copy, or reproduce any content without our written permission.
          </p>

         <h3 className="md:text-6xl text-2xl mt-8 mb-5">User Conduct</h3>
          <p>
            By using our website, you agree not to:
          </p>
         <ul className="!list-disc list-inside font-medium flex flex-col gap-3 my-3">
            <li>Violate any laws or regulations.</li>
            <li>Interfere with the security or functionality of the site.</li>
            <li>Upload any malicious code or spam.</li>
            <li>Impersonate others or provide false information.</li>
            <li>We reserve the right to restrict access to any user who violates these terms.</li>
          </ul>

         <h3 className="md:text-6xl text-2xl mt-8 mb-5">Changes to Terms</h3>
          <p>
            We may update these Terms & Conditions from time to time. Any changes will be posted on this page. Continued use of our website constitutes acceptance of those changes.
          </p>

         <h3 className="md:text-6xl text-2xl mt-8 mb-5">Contact Us</h3>
          <p>
            Got questions about these terms or your purchase? Our customer service team is here to help. The company supports each product sold and maintains a goal to provide you with enjoyable shopping experiences.
          </p>
          <ul className="!list-disc list-inside font-medium flex flex-col gap-3 my-3">
            <li>
              <strong>Email Us:</strong>{" "}
              <Link href="mailto:support@puritualofficial.com" target="_blank">
                support@puritualofficial.com
              </Link>
            </li>
            <li>
              <strong>Call Us:</strong>{" "}
              <Link href="tel:+923004416441" target="_blank">
                (+92) 300 4416441
              </Link>
              ,{" "}
              <Link href="tel:+923004161465" target="_blank">
                (+92) 300 4161465
              </Link>
            </li>
            <li>
              <strong>WhatsApp Us:</strong>{" "}
              <Link href="tel:+923004416441" target="_blank">
                (+92) 300 4416441
              </Link>
            </li>
            <li>
              <strong>Site Address:</strong> 22A- Military Accounts Society, College Road, Lahore
            </li>
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
          className="absolute bottom-0 left-20 md:left-60 md:w-[141px]"
        />
        <Image src="/svg/bubble-group.svg" alt="" width={888} height={580} className="w-[400px] md:w-[888px]" />
      </div>
    </section>
  );
};

export default TermsSection;
