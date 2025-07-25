import React from 'react'

function Shownow() {
  return (
    <div>
       {/* Shop Now button */}
            <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 xl:right-40 top-[70%] sm:top-[75%] -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                
                <div className="w-full h-full ">
                    <div className='bg-[#ADCF36] w-3 h-3 rounded-full'></div>
                    <button className='bg-[#ADCF36]  hover:bg-[#9bbf2a] transition-colors rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex flex-col items-center justify-center text-center text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide'>
                        SHOP <br /> NOW
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Shownow;


