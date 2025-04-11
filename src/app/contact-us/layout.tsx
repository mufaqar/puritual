import React from 'react'

export const metadata = {
  title: "Contact Us | Puritual",
  description: "Have questions or need support? Get in touch with the Puritual team. We're here to help with your orders, product inquiries, and more.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout