import Image from 'next/image'
import React from 'react'

function Better() {
    return (
        <section className='bg-primary md:pb-0 pb-16'>
            <div className='mx-auto'>
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* text content - now on left side */}
                    <div className='w-full md:w-[40%] items-center flex justify-center container mx-auto'>
                        <div className='py-10 px-4 md:pl-10 lg:pl-20 md:ml-10 lg:ml-18'>
                            <h2 className='font-medium md:text-7xl lg:text-9xl text-5xl text-dark'>
                                Better than<br />
                                <span className='font-light md:text-5xl lg:text-5xl text-3xl text-dark'>Soap & Gel wash</span>
                            </h2>
                            <div className='pt-6 md:pt-10'>
                                <p className='text-xl md:text-2xl lg:text-3xl text-dark font-normal'>
                                    <span className='font-light'> Unlike conventional gel-based hand washes, </span>
                                    Puritual dispenses rich, airy lather and lasts at least twice as long.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* img - on right side */}
                    <div className='w-full md:w-[60%]'>
                        <Image
                            src="/images/better.webp"
                            alt="Puritual hand wash product comparison"
                            width={1170}
                            height={1000}
                            className="w-full h-auto object-contain md:block hidden"
                            priority
                        />
                        <Image
                            src="/images/better-mbl.webp"
                            alt="better mbl"
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

export default Better