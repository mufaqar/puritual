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
    <section className="pt-12 pb-20 relative overflow-x-hidden">
      <div className="px-4 md:px-0 max-w-[1280px] mx-auto">
        <div className="font-axiforma text-dark mission-text">
          <h3 className="text-2xl my-4 ">Who We Are</h3>
          <p>Putitual is a premium personal care brand, offering high-quality skincare, haircare, and hygiene products designed to make your daily routine refreshing and enjoyable.</p>
          <ul className="space-y-2 my-3">
            <li><strong>Website:</strong> <Link href="https://www.puritualofficial.com/" target="_blank">www.puritualofficial.com/</Link></li>
            <li><strong>Business Address:</strong> [your business address]</li>
            <li><strong>Contact Email:</strong> <Link href="mailto:info@puritualofficial.com" target="_blank">info@puritualofficial.com</Link></li>
          </ul>

          <h3 className="text-2xl my-4">Information We Collect</h3>
          <p>We may collect the following information through our website, contact forms, and purchase process:</p>
          <ol className="space-y-2 my-3">
            <li>a. Personal Information
              <ul className="pl-4 space-y-2 mt-3">
                <li>Full Name</li>

                <li>Email Address</li>

                <li>Billing and Shipping Address</li>

                <li>Phone Number</li>

                <li>Payment Information (handled securely by third-party payment processors)</li>
              </ul>
            </li>


            <li>b. Non-Personal Information
              <ul className="pl-4 space-y-2 mt-3">
                <li>Browser type and device</li>

                <li>IP address</li>

                <li>Referring URLs and pages visited</li>

                <li>Time spent on the site</li>

                <li>Cookies and tracking data (see section 5)</li>
              </ul>
            </li>
          </ol>
          <p>This data helps us provide a better user experience and improve our online personal care store.</p>

          <h3 className="text-2xl my-4">How We Use Your Information</h3>
          <p>Your data is used to:</p>

          <p>Process and deliver your Putitual orders</p>

          <p>Provide customer service and support</p>

          <p>Send order confirmations, shipping updates, and special offers (you can unsubscribe anytime)</p>

          <p>Improve our product offerings and website performance</p>

          <p>Comply with legal and regulatory requirements</p>

          <p>We only retain your information for as long as necessary to fulfill these purposes.</p>

          <h3 className="text-2xl my-4">How We Protect Your Data</h3>
          <p>We use industry-standard security measures including SSL encryption and secure payment gateways to ensure your data is protected.</p>

          <p>We do not sell or rent your personal data to third parties.</p>

          <p>Only authorized personnel and trusted third-party partners (e.g., shipping providers, payment processors) may access your data for necessary services.</p>

          <h3 className="text-2xl my-4">Cookies and Tracking Technologies</h3>
          <p>Our website uses cookies to collect information about your browsing behavior, enhance your shopping experience, and show you relevant offers.</p>

          <p>You can manage or disable cookies through your browser settings. For more information, view our [Cookie Policy].</p>

          <h3 className="text-2xl my-4">Your Data Protection Rights</h3>
          <p>Depending on your location, you may have the right to:</p>

          <p>Access and update your personal data</p>

          <p>Request deletion of your information</p>

          <p>Opt out of marketing communications</p>

          <p>Lodge a complaint with a data protection authority</p>

          <p>To request access or exercise any of these rights, contact us at <Link href="mailto:info@puritualofficial.com" target="_blank">info@puritualofficial.com</Link>.</p>

          <h3 className="text-2xl my-4">Third-Party Services</h3>
          <p>We may link to or integrate with third-party services like payment gateways (e.g., Stripe, PayPal), analytics tools (e.g., Google Analytics), and shipping providers. These third-party services have their own privacy policies which we encourage you to review.</p>

          <h3 className="text-2xl my-4">Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices, laws, or technology. Updates will be posted on this page with a revised May 8, 2025.</p>

          <h3 className="text-2xl my-4">Contact Us</h3>
          <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
          <ul className="space-y-2 my-3">
            <li><strong>Email:</strong> <Link href="mailto:info@puritualofficial.com" target="_blank">info@puritualofficial.com</Link></li>
            <li><strong>Phone:</strong> <Link href="tel:+923444443442" target="_blank">+923444443442</Link></li>
            <li><strong>Address:</strong> [your business address]</li>
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
