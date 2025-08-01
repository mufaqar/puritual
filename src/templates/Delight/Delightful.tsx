import Image from 'next/image'
import React from 'react'

function Delightful() {
    return (
        <section className='bg-[#DBEEB1]'>
            <div className='mx-auto'>
                <div className='flex flex-col md:flex-row gap-6 '>
                    {/* text content - now on left side */}
                    <div className='w-full md:w-[40%] items-center flex justify-center container mx-auto order-2 md:order-1'>
                        <div className='pt-10 px-4 md:pl-10 lg:pl-20'>
                            <h2 className='font-medium  text-4xl md:text-6xl   text-[#25330A]'>
                                Delightful<br />
                                <span className='font-light text-2xl md:text-5xl'>Fragrance</span>
                            </h2>
                            <div className='ml-0 md:ml-10 lg:ml-18 pt-6 md:pt-10'>
                                <p className='  text-xl md:text-2xl lg:text-3xl text-[#25330A] font-normal'>
                                    <span className='font-light'> Naturally inspired scents that turn cleaning into a sensory escape.</span>
                                    Crafted scents that make each wash feel fresh, fun, sensory escape.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* img - on right side */}
                    <div className='w-full md:w-[60%] order-1 md:order-2'>
                        <Image
                            src="/images/Fragrance.png"
                            alt="Fragrance product"
                            width={600}
                            height={600}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Delightful;