import Image from 'next/image'
import React from 'react'

function Delightful() {
    return (
        <section className='bg-primary'>
            <div className='mx-auto'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='w-full md:w-[40%] items-center flex justify-center container mx-auto'>
                        {/* text content - now on left side */}
                        <div className='py-10 px-4 md:pl-10 lg:pl-20 md:ml-10 lg:ml-18'>
                            <h2 className='font-normal md:text-5xl lg:text-7xl text-3xl text-dark'>
                                Delightful<br />
                                <span className='font-medium md:text-7xl lg:text-9xl text-5xl'>Fragrance</span>
                            </h2>
                            <div className=' pt-6 md:pt-10'>
                                <p className='text-xl md:text-2xl lg:text-3xl text-dark font-light'>
                                    <span className='font-light'> Naturally inspired <span className='md:font-light font-bold'>scents</span> that turn <span className='md:font-light font-bold'>cleaning</span> into a <span className='md:font-light font-bold'>sensory escape</span> .</span>
                                </p>
                                <p className='text-xl md:text-2xl lg:text-3xl text-dark font-normal md:block hidden'>Crafted scents that make each wash feel fresh, fun, sensory escape.</p>
                            </div>
                        </div>
                    </div>

                    {/* img - on right side */}
                    <div className='w-full md:w-[60%]'>
                        <Image
                            src="/images/fragrance.webp"
                            alt="Fragrance product"
                            width={1170}
                            height={1000}
                            className="w-full h-auto object-contain md:block hidden"
                            priority
                        />
                        <Image
                            src="/images/fragrance-mbl.webp"
                            alt="Fragrance product"
                            width={1667}
                            height={1667}
                            className="w-full h-auto object-contain md:hidden block"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Delightful;