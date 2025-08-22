import React from 'react'

export const metadata = {
  title: "RETURNS | Puritual – Premium Personal Care Products",
  description: "Putitual is proud to bring you premium personal care products designed to elevate your daily routine.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/returns`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout