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
                            <h2 className='font-medium  text-4xl md:text-6xl   text-[#25330A]'>
                                 Vitamin E<br />
                                <span className='font-light text-2xl md:text-5xl'>Aloe</span>
                            </h2>
                            <div className='ml-0 md:ml-10 lg:ml-18 pt-6 md:pt-10'>
                                <p className='  text-xl md:text-2xl lg:text-3xl text-[#25330A] font-normal'>
                                    <span className='font-light'> Aloe + E =</span>
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