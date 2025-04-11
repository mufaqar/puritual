import React from 'react'

export const metadata = {
  title: "FAQS | Puritual",
  description: "Puritual",
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