import React from 'react'

export const metadata = {
  title: "Contact Us | Puritual",
  description: "Puritual",
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