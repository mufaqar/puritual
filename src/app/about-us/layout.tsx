import React from 'react'

export const metadata = {
  title: "About Us | Puritual",
  description: "Puritual",
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