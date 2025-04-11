import React from 'react'

export const metadata = {
  title: "Catalog | Puritual",
  description: "Browse the full Puritual catalog featuring wellness essentials, natural skincare, and self-care products crafted to elevate your everyday rituals.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/catalog`, // corrected spelling from 'catelog'
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout