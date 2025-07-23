import Shownow from '@/components/shopnow/shownow';
import React from 'react';

function Shop() {
    return (
        <section className="bg-[#DBEEB1] relative overflow-hidden">
            <div className='container mx-auto px-4 sm:px-6'>
                {/* Main content with bottle image */}
                <div className="w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[700px] bg-[url('/images/shop-Bottle.png')] bg-no-repeat bg-contain bg-center">
                    <div className='pt-8 sm:pt-12 md:pt-16 lg:pt-20 pl-4 sm:pl-8 md:pl-12 lg:pl-20 max-w-xs sm:max-w-sm md:max-w-md'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-2 sm:mb-3 md:mb-4 text-[#25330A]'>
                            Shop <br /> Hygiene
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-[#25330A] font-light'>
                            A gentle, organic hand wash that cleanses, hydrates, and refreshes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Circular text positioned on the right side */}
            <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 xl:right-60 top-1/2 sm:top-[30%] -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 pointer-events-none z-10">
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <path
                            id="textPath"
                            d="M50,10 a40,40 0 1,1 -0.1,0 "
                            fill="none"
                        />
                    </defs>
                    <text
                        className="text-[5px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] fill-[#25330A] uppercase tracking-wider"
                    >
                        <textPath href="#textPath" startOffset="0%">
                            <animate
                                attributeName="startOffset"
                                from="0%"
                                to="100%"
                                dur="20s"
                                repeatCount="indefinite"

                            />
                            PODEMOS DE VERDADE! PODEMOS DE VERDADE! PODEMOS DE VERDADE! PODEMOS DE VERDADE!
                        </textPath>
                    </text>
                </svg>
            </div>





            {/* Shop Now button */}
            <Shownow />
        </section>
    );
}

export default Shop;