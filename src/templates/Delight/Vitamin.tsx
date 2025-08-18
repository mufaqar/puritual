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
                            src="/images/Vitamin.png"
                            alt="Vitamin E Aloe product"
                            width={500}
                            height={500}
                            className="w-full h-auto "
                            priority
                        />
                    </div>
                    {/* text content - now on left side */}
                    <div className='w-full md:w-[40%] items-center flex justify-center container mx-auto'>
                        <div className='py-10 px-4 md:pl-10 lg:pl-10'>
                            <h2 className='font-medium md:text-[110px] md:leading-[110px] text-5xl text-dark'>
                                Vitamin E<br /><span className='font-normal md:text-[70px] md:leading-[80px] text-3xl md:block hidden'>&</span>
                                <span className='font-medium md:text-[110px] md:leading-[110px] text-5xl'> <span className='md:hidden inline-block'>& </span> Aloe</span>
                            </h2>
                            <div className='ml-0 md:ml-10 lg:ml-18 pt-6 md:pt-10'>
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