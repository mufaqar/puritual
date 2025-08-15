'use client';
import React from 'react';
import CircleText from '@/components/ui/CircleText'; // Import the component
import Link from 'next/link';

function Shop() {

    return (
        <section className="bg-primary relative overflow-hidden bg-[url('/ images/shop-Bottle.png')] bg-no-repeat bg-contain bg-center relative md:h-full h-[500px]">
            <div className="container mx-auto md:px-3 px-0 flex md:flex-row flex-row justify-between">
                <div className="md:w-1/3 w-1/3 md:px-0 px-3">
                    <div className="py-4 md:py-12 lg:py-8 relative z-[2]">
                        <h2 className="font-medium  text-4xl md:text-6xl text-dark">
                            Shop <br /> Hygiene
                        </h2>
                        <p className=" mt-5 text-base md:text-2xl text-dark font-light md:whitespace-nowrap pb-8 sm:mb-6 md:mb-8">
                            A gentle, organic hand wash that cleanses, hydrates, <br/>and refreshes.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/3 w-[70%] mx-auto bg-[url('/images/shop-Bottle.png')] bg-no-repeat bg-cover bg-center h-[500px] md:h-[600px] lg:h-[700px] md:static absolute left-1/2 md:translate-x-0 -translate-x-1/2">
              
                </div>
                <div className='md:w-1/3 w-1/3 md:px-0 px-3 flex justify-end items-end h-full pt-20 self-end'>
                    <Link href="/catalog" className="md:text-3xl text-xl text-dark hover:text-dark font-semibold light_bubble bg-secoundry md:w-[172px] w-[94px] relative md:h-[172px] h-[94px] rounded-full flex text-center justify-center mt-10 items-center cursor-pointer transition-all duration-300 ease-linear group"                                  >
                        <span className="z-10 group-hover:text-white">SHOP <br />NOW</span>
                        <div className="bg-primary md:w-[172px] w-[94px] absolute md:h-[172px] h-[94px] scale-0 group-hover:scale-[1.01] transition-all duration-300 ease-linear rounded-full group-hover:bg-dark" />
                    </Link>
                </div>
            </div>

            {/* Circular text */}
            <div className="absolute right-6 sm:right-8 md:right-16 lg:right-24 xl:right-80 md:top-[40%] top-[20%] -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 pointer-events-none z-10">
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