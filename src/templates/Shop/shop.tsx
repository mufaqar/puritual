'use client';
import React from 'react';
import CircleText from '@/components/ui/CircleText'; // Import the component
import Link from 'next/link';

function Shop() {

    return (
        <section className="bg-primary relative overflow-hidden bg-[url('/ images/shop-Bottle.png')] bg-no-repeat bg-contain bg-center">
            <div className="container mx-auto  flex md:flex-row flex-col justify-between">
                <div className="md:w-1/3 w-full">
                    <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-2 sm:mb-3 md:mb-4 text-[#25330A]">
                            Shop <br /> Hygiene
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-[#25330A] font-light md:whitespace-nowrap">
                            A gentle, organic hand wash that cleanses, hydrates, <br/>and refreshes.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/3 w-full bg-[url('/images/shop-Bottle.png')] bg-no-repeat bg-cover bg-center h-[500px] md:h-[600px] lg:h-[700px]">
              
                </div>
                <div className='md:w-1/3 w-full flex justify-end items-end h-full pb-20 md:self-end'>
                    <Link href="/catalog" className="md:text-3xl text-xl text-dark hover:text-dark font-semibold light_bubble bg-secoundry md:w-[172px] w-[94px] relative md:h-[172px] h-[94px] rounded-full flex text-center justify-center mt-10 items-center cursor-pointer transition-all duration-300 ease-linear group"                                  >
                        <span className="z-10 group-hover:text-white">SHOP <br />NOW</span>
                        <div className="bg-primary md:w-[172px] w-[94px] absolute md:h-[172px] h-[94px] scale-0 group-hover:scale-[1.01] transition-all duration-300 ease-linear rounded-full group-hover:bg-dark" />
                    </Link>
                </div>
            </div>

            {/* Circular text */}
            <div className="absolute right-6 sm:right-8 md:right-16 lg:right-24 xl:right-80 top-1/2 sm:top-[40%] -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 pointer-events-none z-10">
                <CircleText
                    text={[
                        'PODEMOS DE VERDADE! PODEMOS DE VERDADE!',
                    ]}
                    radius={[150, 250]}
                    reverse={[false, false]}
                    className={['text-2xl', '']}
                    textClass={[
                        'text-2xl text-dark tracking-widest font-normal',
                    ]}
                />
            </div>
        </section>
    );
}

export default Shop;