"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile"

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
    <section className="pt-12 pb-20 relative overflow-x-hidden">
      <div className="px-4 md:px-0 max-w-[1280px] mx-auto">
        <div className="font-axiforma text-dark mission-text">
          <h3 className="text-2xl my-4 ">When We Collect Your Personal Information</h3>
          <p>
            Hey there! Interaction with our amazing platform provides multiple entertaining opportunities for us to receive your personal information. Your personal information comes to us during various activities on our website like account registration and purchases and newsletter subscriptions and promotions and support debates.
          </p>

          <h3 className="text-2xl my-4 ">How We Collect Your Personal Information</h3>
          <p>We gather your personal info through:</p>
          <ul className="space-y-2 my-3">
            <li>Forms you fill out on our user-friendly website</li>
            <li>Transaction data when you make a purchase of our fantastic products</li>
            <li>Cookies and tracking technologies when you browse our site and enjoy our content</li>
            <li>Social media interactions and plug-ins that help us stay connected</li>
            <li>Direct communication from emails, phone calls, or live chats with our helpful team</li>
          </ul>

          <h3 className="text-2xl my-4">How We Use Your Personal Information</h3>
          <p>We use your personal info for a bunch of cool things, including:</p>
          <ul className="pl-4 space-y-2 mt-3">
            <li>Processing and fulfilling your orders so you get your goodies ASAP</li>
            <li>Providing top-notch customer support and answering all your questions</li>
            <li>Sending you exciting promotional materials and updates</li>
            <li>Improving our website and services based on your valuable feedback</li>
            <li>Personalizing your shopping experience to make it even more awesome</li>
            <li>Preventing fraud and ensuring your security</li>
          </ul>

          <h3 className="text-2xl my-4">Use of Social Media Plug-ins</h3>
          <p>Our website might feature social media plug-ins to help you share the love with your friends. These plug-ins might collect your IP address and the page you're visiting on our site, and they may set a cookie to make the plug-in work perfectly. Interactions with these plug-ins are governed by the privacy policies of the social media platforms.</p>

          <h3 className="text-2xl my-4">Cookies</h3>
          <p>Cookies are those little data files that make your life easier. We use cookies to:</p>
          <ul className="pl-4 space-y-2 my-3">
            <li>Remember your preferences and settings so you don't have to</li>
            <li>Keep track of the items in your shopping cart</li>
            <li>Facilitate login and authentication so you can access your account effortlessly</li>
            <li>Analyse site traffic and user behaviour to make our site better</li>
            <li>Deliver targeted advertisements that you'll find interesting</li>
          </ul>

          <p>You can control your cookie settings through your browser preferences, but keep in mind that disabling cookies might affect the functionality of our awesome website.</p>

          <h3 className="text-2xl my-4">Cookies and Tracking Technologies</h3>
          <p>Our website uses cookies to collect information about your browsing behavior, enhance your shopping experience, and show you relevant offers.</p>

          <h3 className="text-2xl my-4">Security</h3>
          <p>Your security is our top priority. The protection of your data against unauthorized access as well as random alteration or disclosure is achieved through encryption and secure server infrastructure. This also applies to secure transactions and credit card security, ensuring that your payment information is handled safely and securely. We keep security measures up to date but transmissions and electronic storage through the Internet have unpreventable security risks that prevent us from maintaining absolute protection.</p>

          <h3 className="text-2xl my-4">Credit/Debit Card Information and Personally Identifiable Information</h3>
          <p> The website does not keep nor share personal credit/debit card details and identifiable information with any third parties. We shall NOT sell or disclose your personal information to third parties without obtaining your prior consent.</p>

          <h3 className="text-2xl my-4">Links to Other Sites </h3>
          <p>The Site may contain links to other sites or frames of other sites. Please be aware that we are not responsible for the privacy practices or content of those other sites, nor for any third party to whom we transfer your personal information in accordance with our Privacy Policy.</p>

          <h3 className="text-2xl my-4">Changes to this Privacy Policy</h3>
          <p>Puritual reserves the right, at its discretion, to modify this privacy policy at any time. Any amendments will be posted on the Website and will apply to personal information collected from the date of posting onward. Your continued use of the website after such postings constitutes your acceptance of the revised terms. All changes will comply with applicable federal and provincial privacy legislation. We recommend that you review this privacy policy regularly for updates.</p>

          <h3 className="text-2xl my-4">Consent </h3>
          <p>By using our website and services, you consent to the collection, use, and sharing of your personal information as described in this fun and friendly Privacy Policy. Using our services requires acceptance of this policy therefore all users who disagree should avoid accessing our platform. Any changes to this policy take effect for all users because continuous service usage signifies agreement with updated policies.</p>
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
