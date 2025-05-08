import React from 'react'

export const metadata = {
  title: "Privacy Policy | Putitual – Premium Personal Care Products",
  description: "At Putitual, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or purchase our personal care products online",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-conditions`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout