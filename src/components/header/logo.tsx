import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/logo.svg" alt='Puritual' width={236} height={58}/>
    </Link>
  )
}

export default Logo