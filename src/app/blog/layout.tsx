import React from 'react'

export const metadata = {
  title: "Blog | Puritual",
  description: "Explore expert tips, wellness guides, and inspiring stories on the Puritual blog. Stay connected to the latest in self-care, sustainability, and mindful living.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout