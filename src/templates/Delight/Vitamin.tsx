import Image from 'next/image'
import React from 'react'

function Vitamin() {
    return (
        <section className='bg-primary'>
            <div className='mx-auto'>
                <div className='flex flex-col-reverse md:flex-row gap-6'>
                    {/* img - now on left side */}
                    <div className='w-full md:w-[60%] '>
                        <Image
                            src="/images/vitamin.webp"
                            alt="Vitamin E Aloe product"
                            width={1170}
                            height={1000}
                            className="w-full h-auto relative z-10 md:block hidden"
                            priority
                        />
                        <Image
                            src="/images/vitamin-mbl.webp"
                            alt="vitamin mbl"
                            width={1667}
                            height={1667}
                            className="w-full h-auto object-contain md:hidden block"
                            priority
                        />
                    </div>
                    {/* text content - now on left side */}
                    <div className='w-full md:w-[40%] items-center flex justify-center container mx-auto relative'>
                        <div className="w-[290px] h-[290px] -ml-28 -z-0">
                            <Image
                                src="/images/enriched-with.png"
                                alt="Scroll Circle"
                                width={1334}
                                height={1334}
                                className="animate-rotate-smooth"
                            />
                        </div>
                        <div className='py-10 px-4 '>
                            <h2 className='font-medium md:text-7xl lg:text-9xl  text-dark'>
                                Vitamin E<br /><span className='font-normal md:text-[70px] md:leading-[80px] text-3xl md:block hidden'>&</span>
                                <span className='font-medium md:text-7xl lg:text-9xl text-5xl'> <span className='md:hidden inline-block'>& </span> Aloe</span>
                            </h2>
                            <div className='pt-6 md:pt-10'>
                                <p className='text-xl md:text-2xl lg:text-3xl text-dark font-light'>
                                    <span className='font-normal'> Aloe + E =</span>
                                    skin that feels clean, calm, and cared for
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vitamin;