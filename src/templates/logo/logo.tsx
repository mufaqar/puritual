import Image from 'next/image';
import React from 'react'

function Logo() {
  return (
   <section className='bg-primary py-14'>
     <div className='container mx-auto'>
     <div className='flex justify-between items-center '>
            <Image src="/images/Path-1.svg" alt="Puritual" width={80} height={80}  className=" " />
             <Image src="/images/Path-1.svg" alt="Puritual" width={80} height={80}  className=" " />
            <Image src="/images/Path-1.svg" alt="Puritual" width={80} height={80}  className=" " />
            <Image src="/images/Path-1.svg" alt="Puritual" width={80} height={80}  className=" " />
     </div>
    </div>
   </section>
  )
}

export default Logo;
