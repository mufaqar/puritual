import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeLayout from "@/components/ui/theme-layout";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Puritual | Elevate Your Self-Care Rituals",
description: "Discover natural, sustainable, and beautifully crafted products to enrich your wellness journey. Shop skincare, wellness essentials, and mindful living products at Puritual.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <NextTopLoader />
        <ThemeLayout>
          <Header />
          {children}
          <Footer />
        </ThemeLayout>
      </body>
    </html>
  );
}
