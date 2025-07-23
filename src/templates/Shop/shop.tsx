import React from 'react';

function Shop() {
    return (
        <section className="bg-[#DBEEB1]">
            <div className='container mx-auto px-4 sm:px-6'>
                <div className="w-full h-auto sm:h-[600px] md:h-[700px]  bg-[url('/images/shop-Bottle.png')] bg-no-repeat bg-contain bg-center">
                    <div className='pt-10 sm:pt-14 md:pt-20 pl-6 sm:pl-10 md:pl-20 max-w-xs sm:max-w-sm md:max-w-md'>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 sm:mb-4 text-[#25330A]'>
                            Shop <br /> Hygiene
                        </h2>
                        <p className='text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#25330A] font-light'>
                            A gentle, organic hand wash that cleanses, hydrates, and refreshes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shop;