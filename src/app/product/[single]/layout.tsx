import React from 'react'

export async function generateMetadata({ params }: any) {
  const slug = await params
  return {
    title: `${slug?.single.replace(/-/g, ' ').replace(/\b\w/g, (char:any) => char.toUpperCase())} | Puritual`,
    description: "Explore detailed information, benefits, and usage tips for our Puritual products. Shop with confidence and elevate your everyday rituals.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${slug?.single}`,
    },
  };
}

const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout