import React, { Suspense } from 'react'

const layout = ({children}:any) => {
  return (
    <Suspense fallback={''}>{children}</Suspense>
  )
}

export default layout