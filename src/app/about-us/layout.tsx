import React from "react";

export const metadata = {
  title: "About Us | Puritual",
  description:
    "Learn about Puritual's mission to empower wellness through natural, sustainable, and thoughtfully crafted products. We're dedicated to helping you elevate your self-care rituals.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
