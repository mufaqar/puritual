import Image from 'next/image'
import React from 'react'

function Delightful() {
    return (
        <section className='bg-[#DBEEB1]'>
            <div className='mx-auto'>
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* text - order changes on mobile */}
                    <div className='w-full md:w-[40%] items-center flex justify-center container mx-auto order-2 md:order-1'>
                        <div className='pt-10 px-4'>
                            <h2 className='text-4xl md:text-5xl lg:text-7xl xl:text-[80px] font-light text-[#25330A]'>
                                Delightful <br />
                                <span className='text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-[400]'>Fragrance</span>
                            </h2>
                            <div className='ml-0  pt-6 md:pt-10'>
                                <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 text-[#25330A] font-[400]'>
                                    <span className='font-light'> Naturally inspired scents that turn cleaning into a sensory escape.</span>
                                    Crafted scents that make each wash feel fresh, fun, sensory escape.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* img - order changes on mobile */}
                    <div className='w-full md:w-[60%] order-1 md:order-2'>
                        <Image
                            src="/images/Fragrance.png"
                            alt="Fragrance product"
                            width={800}
                            height={600}
                            className="w-full h-auto md:h-[600px] object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Delightful;