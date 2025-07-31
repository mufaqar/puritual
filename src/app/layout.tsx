import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeLayout from "@/components/ui/theme-layout";
import NextTopLoader from "nextjs-toploader";
import { Josefin_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: "Puritual | Elevate Your Self-Care Rituals",
description: "Discover natural, sustainable, and beautifully crafted products to enrich your wellness journey. Shop skincare, wellness essentials, and mindful living products at Puritual.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  },
};



const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-josefin',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable}`}>
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
