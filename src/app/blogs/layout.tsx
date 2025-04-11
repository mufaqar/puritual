import React from 'react'

export const metadata = {
  title: "Blog | Puritual",
  description: "Puritual",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout