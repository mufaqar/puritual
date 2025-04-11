import React from 'react'

export const metadata = {
  title: "FAQs | Puritual",
  description: "Find answers to common questions about Puritual's products, orders, shipping, returns, and more. We're here to make your shopping experience seamless.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
  },
};



const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout