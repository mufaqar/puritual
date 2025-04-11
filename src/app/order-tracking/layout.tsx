import React from 'react'

export const metadata = {
  title: "Order Tracking | Puritual",
  description: "Track your Puritual order status in real-time. Simply enter your order details to stay updated on your delivery progress.",
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