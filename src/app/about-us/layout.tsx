import React from 'react'

export const metadata = {
  title: "About Us | Puritual",
  description: "Learn about Puritual's mission to empower wellness through natural, sustainable, and thoughtfully crafted products. We're dedicated to helping you elevate your self-care rituals.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout