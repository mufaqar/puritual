import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/images/Logo.png" alt='Puritual' width={200} height={59} className='md:w-[200px]'/>
    </Link>
  )
}

export default Logo