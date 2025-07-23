import Image from 'next/image'
import React from 'react'

function Vitamin() {
    return (
        <section className='bg-[#DBEEB1]'>
            <div className='mx-auto'>
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* img - now on left side */}
                    <div className='w-full md:w-[80%] '>
                        <Image
                            src="/images/Vitamin.png"
                            alt="Vitamin E Aloe product"
                            width={500}
                            height={500}
                            className="w-full h-auto "
                            priority
                        />
                    </div>

                    {/* text content */}
                    <div className='flex flex-col md:flex-row gap-6 mb-10'>
                       <div className='w-full  items-center flex justify-end container mx-auto order-2 md:order-1'>
                         <div className='pt-10 px-4 '>
                            <h2 className='text-2xl md:text-6xl  font-light text-[#25330A] leading-tight'>
                                Vitamin E <br />
                                <span className='text-5xl md:text-8xl lg:text-[90px] font-[500]'>Aloe</span>
                            </h2>
                            <div className='ml-0 md:ml-10 lg:ml-20 pt-6 md:pt-10'>
                                <p className='text-xl md:text-2xl lg:text-3xl text-[#25330A] font-normal'>
                                    <span className='font-light'>Aloe + E =</span>
                                    skin that feels clean, calm, and cared for
                                </p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vitamin;