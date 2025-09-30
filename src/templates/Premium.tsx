import Image from 'next/image'
import React from 'react'

function Premium() {
  return (
    <div className="w-full md:h-screen h-[550px] md:py-16 py-3 md:bg-[url('/images/Premium.png')] bg-no-repeat bg-cover bg-center bg-none relative">
      <Image src="/images/premium.webp" alt='premium' width={1667} height={1667} className='w-full h-full absolute top-0 md:hidden block' />
      <div className='flex flex-col-reverse md:flex-row md:gap-6 gap-0 justify-between container mx-auto md:px-3 px-3 relative z-[3]'>
        {/* img - now on left side */}
        <div className='w-full md:w-[75%] '>
        </div>
        {/* text content - now on left side */}
        <div className='w-full md:w-[35%]'>
          <div className='py-2 md:pl-10 lg:pl-10'>
            <h2 className='font-normal md:text-5xl lg:text-6xl text-3xl text-dark'>
              Premium<br />
              <span className='font-medium md:text-7xl lg:text-9xl text-5xl'>FOAMING</span>
            </h2>
            <h2 className='ml-10 md:ml-10 lg:ml-18 font-normal md:text-5xl lg:text-6xl  text-3xl text-dark'>Hand Wash</h2>
            <div className='ml-0 md:ml-10 lg:ml-18 md:pt-6 pt-2 md:w-full w-[67%]'>
              <p className='text-sm md:text-2xl lg:text-3xl text-dark font-normal'>
                <span className='md:font-normal font-bold'>No Gel</span>, Same clean, more fun!
              </p>
              <p className='text-base md:text-2xl lg:text-3xl text-dark md:font-bold font-normal'>Puritual's <span className='md:font-normal font-bold'>rich foam</span> makes all the <span className='md:font-normal font-medium'>difference</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
