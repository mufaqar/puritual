'use client';
import Shownow from '@/components/shopnow/shownow';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

function Shop() {
    const containerRef = useRef(null);
    const [angle, setAngle] = useState(0);
    const text = "PODEMOS DE VERDADE! PODEMOS DE VERDADE! ";
    const radius = 100;

    useEffect(() => {
        const animate = () => {
            setAngle(prev => (prev + 0.5) % 360);
            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []);

    

    return (
        <section className="bg-[#DBEEB1] relative overflow-hidden">
            <div className='container mx-auto p'>
                {/* Main content with bottle image */}
                <div className="w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[700px] bg-[url('/images/shop-Bottle.png')] bg-no-repeat bg-contain bg-center">
                    <div className='pt-8 sm:pt-12 md:pt-16 lg:pt-20   max-w-xs sm:max-w-sm md:max-w-md'>
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

            <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 xl:right-80 top-1/2 sm:top-[30%] -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 pointer-events-none z-10 perspective-500">
                <div
                    ref={containerRef}
                    className="relative w-full h-full transform-style-preserve-3d" >
                    {Array.from({ length: text.length }).map((_, i) => {
                        const charAngle = angle + (i * (360 / text.length));
                        const radian = charAngle * Math.PI / 180;
                        const x = 50 + 45 * Math.cos(radian);
                        const y = 50 + 45 * Math.sin(radian);

                        return (
                            <span
                                key={i}
                                className="absolute text-sm font-[300] text-[#25330A]"
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: `rotate(${charAngle + 90}deg)`,
                                    transformOrigin: '0 0',
                                }}
                            >
                                {text[i % text.length]}
                            </span>
                        );
                    })}
                </div>
            </div>
     

            {/* Shop Now button */}
            <Shownow />
        </section>
    );
}

export default Shop;