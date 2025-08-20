import React from 'react'

function Premium() {
  return (
    <div className="w-full h-screen py-16 md:bg-[url('/images/Premium.png')] bg-no-repeat bg-cover bg-center bg-[url('/images/premium_mbl.png')]">
      <div className='flex flex-col-reverse md:flex-row md:gap-6 gap-0'>
        {/* img - now on left side */}
        <div className='w-full md:w-[60%] '>
          
        </div>
        {/* text content - now on left side */}
        <div className='w-full md:w-[25%]'>
          <div className='py-10 px-3 md:pl-10 lg:pl-10'>
            <h2 className='font-normal md:text-[70px] md:leading-[70px] text-3xl text-dark'>
              Premium<br />
              <span className='font-medium md:text-[110px] md:leading-[90px] text-5xl'>FOAMING</span>
            </h2>
            <h2 className='ml-10 md:ml-10 lg:ml-18 font-normal md:text-[70px] md:leading-[70px] text-3xl text-dark'>Hand Wash</h2>
            <div className='ml-0 md:ml-10 lg:ml-18 pt-6 md:w-full w-[67%]'>
              <p className='text-lg md:text-2xl lg:text-3xl text-dark font-normal'>
                <span className='md:font-normal font-medium'>No Gel</span>, Same clean, more fun!
              </p>
              <p className='text-lg md:text-2xl lg:text-3xl text-dark md:font-medium font-normal'>Puritual's <span className='md:font-normal font-medium'>rich foam</span> makes all the <span className='md:font-normal font-medium'>difference</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
