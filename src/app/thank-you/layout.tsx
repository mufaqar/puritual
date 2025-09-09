import React, { Suspense } from 'react'


export const metadata = {
  title: "Success | Puritual",
  description: "Puritual",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
  },
};

const layout = ({children}:any) => {
  return (
    <Suspense fallback={''}>{children}</Suspense>
  )
}

export default layout