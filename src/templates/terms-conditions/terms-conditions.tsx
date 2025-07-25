"use client";
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
          <h3 className="text-2xl my-4">Welcome!</h3>
          <p>Hi, and welcome to our store! These are the rules and guidelines required for purchasing any of our amazing products. By placing an order, you fully agree with these terms. So just read on before buying!</p>

          <h3 className="text-2xl my-4">Order Acceptance</h3>
          <p>Every order's acceptance and availability are subject to conditions. If something you ordered is sold out, we will inform you via e-mail. You can either wait until it is restocked or cancel the order; it's your choice!</p>

          <h3 className="text-2xl my-4">Pricing and Payment</h3>
          <p>All prices include applicable taxes unless stated otherwise. Prices may change without notice, but you will see the latest price display during your shopping session. We accept various secure payment methods on our site. By ordering, you confirm your payment details are legit</p>

          <h3 className="text-2xl my-4">Shipping and Delivery</h3>
          <p>We aim to ship all orders within 2-3 business days. Delivery times vary depending on where you are and the shipping method. Our responsibility does not extend to delivery delays from uncontrollable external factors though we will do our very best to get your order to you ASAP!</p>

          <h3 className="text-2xl my-4">Returns and Refunds</h3>
          <p>Not happy with your purchase? Not to worry! Simply return the items within 7 days and receive a full refund or exchange. The item should be in its original packaging and unused along with the relevant invoice. Please note that items bought during the sale cannot be exchanged or returned unless the product received does not match the product that you have ordered.</p>
          <p>Customers are required to pay for their own shipping costs when returning an item. Shipping costs are non-refundable. If a refund is issued, the cost of return shipping & COD charges (if any) will be deducted from the refund amount.</p>
          <p>Please contact customer support for further instructions regarding returns.</p>

          <h3 className="text-2xl my-4">Product Descriptions</h3>
          <p>Our product descriptions reflect accuracy to the best of our abilities, but small imperfections may occur occasionally. Undescribed product attributes call for product return directly to our facilities while maintaining items unused.</p>

          <h3 className="text-2xl my-4">Limitations of Liability</h3>
          <p>We set our liability limit to the amount of your payment when purchasing products. Our business does not burden itself with responsibility for indirect damages or special incidentals or any other types of special damages no matter what occurs.</p>

          <h3 className="text-2xl my-4">Governing Law</h3>
          <p>The laws applying in the registered jurisdiction of our establishment shall govern these terms. Any disputes shall be adjudicated solely by the courts of that jurisdiction.</p>

          <h3 className="text-2xl my-4">Contact Us</h3>
          <p>Got questions about these terms or your purchase? Our customer service team is here to help. The company supports each product sold and maintains a goal to provide you with enjoyable shopping experiences.</p>
          <ul className="space-y-2 my-3">
            <li><strong>Email Us:</strong> <Link href="mailto:support@puritualofficial.com" target="_blank">support@puritualofficial.com</Link></li>
            <li><strong>Call Us:</strong> <Link href="tel:+923004416441" target="_blank">(+92) 300 4416441</Link>, <Link href="tel:+923004161465" target="_blank">(+92) 300 4161465</Link></li>
            <li><strong>WhatsApp Us:</strong> <Link href="tel:+923004416441" target="_blank">(+92) 300 4416441</Link></li>
            <li><strong>Site Address:</strong> 22A- Military Accounts Society, College Road, Lahore</li>
          </ul>
          <p>
            Thanks for choosing us! We appreciate your business and look forward to serving you again soon.
          </p>
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
