import React from 'react'

export const metadata = {
  title: "Catalog | Puritual",
  description: "Puritual",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/catelog`,
  },
};


const layout = ({children}:any) => {
  return (
    <>{children}</>
  )
}

export default layout