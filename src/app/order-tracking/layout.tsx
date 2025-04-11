import React from 'react'

export const metadata = {
  title: "Order Tracking | Puritual",
  description: "Puritual",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/order-tracking`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout