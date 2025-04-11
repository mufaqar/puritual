import React from 'react'

export const metadata = {
  title: "Checkout | Puritual",
  description: "Puritual",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout