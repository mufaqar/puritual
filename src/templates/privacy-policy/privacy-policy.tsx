"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile"
import Link from "next/link";

const PrivacySection = () => {
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
    <section className="pt-12 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-3 md:px-0">
        <div className="mission-text text-dark">
          <p>
            At Puritual, your privacy is important to us. We are committed to keeping your personal information secure and confidential. We do not sell or share your data with anyone except as necessary to process and ship your purchases.
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Information Collection</h3>
          <p>We collect personal information such as your name, email, shipping address, and payment details when you:</p>
          <ul className="!list-disc list-inside font-medium flex flex-col gap-3 my-3">
            <li>Register an account</li>
            <li>Place an order</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact customer support</li>
          </ul>
          <p>
            We also collect non-personal data (like browser type, device info, and IP address) to improve our website performance and user experience.
          </p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Use of Information</h3>
          <p>Your information is used to:</p>
          <ul className="!list-disc list-inside font-medium flex flex-col gap-3 mt-3">
            <li>Fulfill and ship your orders</li>
            <li>Provide order updates and support</li>
            <li>Respond to your inquiries</li>
            <li>Send you updates, offers, and newsletters (if subscribed)</li>
            <li>Improve our site and services</li>
          </ul>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Cookies and Tracking</h3>
          <p>We use cookies to:</p>
          <ul className="!list-disc list-inside font-medium flex flex-col gap-3 my-3">
            <li>Enable essential site functions like your shopping cart</li>
            <li>Recognize returning users</li>
            <li>Track anonymous usage data for analytics</li>
            <li>You can disable cookies in your browser, but it may affect how the site functions</li>
          </ul>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Communications</h3>
          <p>Registered users and customers may occasionally receive promotional emails or newsletters. If you prefer not to receive these communications, you can opt out anytime by:</p>
          <ul className="!list-disc list-inside font-medium flex flex-col gap-3 my-3">
            <li>Clicking the unsubscribe link in emails</li>
            <li>Contacting us at <Link href="mailto:support@puritualofficial.com" target="_blank"> support@puritualofficial.com</Link></li>
          </ul>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Third-Party Services</h3>
          <p>We may share limited information with:</p>
          <ul className="!list-disc list-inside font-medium flex flex-col gap-3 my-3">
            <li>Shipping partners (to deliver your order)</li>
            <li>Payment processors (to securely handle transactions)</li>
          </ul>
          <p>These parties are only authorized to use your data to fulfill their duties and are not permitted to use it for other purposes.</p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Data Security</h3>
          <p>We use industry-standard encryption (SSL) to protect your sensitive information during transactions. Access to your personal data is restricted to authorized personnel only.</p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Legal Disclosure</h3>
          <p>We may disclose personal information if required by law, court order, or legal process, or to protect our rights and the safety of our customers.</p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Business Transfers</h3>
          <p>If Puritual undergoes a merger, acquisition, or asset sale, customer information may be transferred as part of that process. You will be notified if your personal information is handled differently.</p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Your Rights & Opt-Out </h3>
          <p>You can:</p>
          <ul className="!list-disc list-inside font-medium flex flex-col gap-3 my-3">
            <li>Update or delete your account information</li>
            <li>Unsubscribe from emails anytime</li>
            <li>Request data deletion by contacting us</li>
          </ul>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time. All changes will be posted on this page, and material changes may be communicated via email or site notification.</p>

          <h3 className="md:text-6xl text-2xl mt-8 mb-5">Contact Us</h3>
          <p>If you have any questions or requests regarding this policy, contact us at:</p>
          <ul className="!list-disc list-inside font-medium flex flex-col gap-3 my-3">
            <li>Puritual</li>
            <li>Email: <Link href="mailto:support@puritualofficial.com" target="_blank">support@puritualofficial.com</Link></li>
            <li>Phone: <Link href="tel:+923004416441">(+92) 300 4416441</Link></li>
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

export default PrivacySection;
