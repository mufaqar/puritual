"use client";

import React, { useRef } from "react";
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import Slider, { Settings } from "react-slick";

const reviews = [
  {
    id: 1,
    username: '@customer.review',
    text: `Puritual's meditation oil is calming and smells divine! Enhances my daily practice, but the bottle leaks slightly. Great value for the price.`,
    image: '/images/user_dp.png',
    rating: 5,
  },
  {
    id: 2,
    username: '@customer.review',
    text: `Puritual's aromatherapy diffuser is sleek and calming. Elevates my mood, but setup was tricky. Affordable and effective for daily use!`,
    image: '/images/user_dp.png',
    rating: 5,
  },
];

const Review = () => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings: Settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  return (
    <section className="bg-primary py-10 md:py-[90px]">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl md:text-[150px] md:leading-[110px] z-[1] mb-10 relative mx-auto text-dark font-normal capitalize">
          Customer Reviews
        </h2>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="md:px-2.5 px-1">
                <div className="flex items-center gap-4 mb-6">
                  <p className="md:text-[50px] md:leading-[50px] text-2xl text-dark">Rating</p>
                  <div className="flex gap-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} className="text-dark text-2xl" />
                    ))}
                  </div>
                </div>
                <div className="bg-dark text-primary py-5 rounded-[20px]">
                  <div className="flex md:flex-row flex-row items-start gap-3 md:px-[70px] px-5">
                    <Image
                      src={review.image}
                      alt={review.username}
                      width={70}
                      height={70}
                      className='rounded-full md:w-[70px] md:h-[70px] w-10 h-10' />

                    <div className="mt-4">
                      <p className="md:text-2xl text-xl font-medium mb-2">{review.username}</p>
                      <p className="md:text-2xl text-xl font-[100] italic">{review.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* Custom Arrows */}
          <button
            className="md:hidden block button absolute top-1/2 -translate-y-1/2 sm:-left-5 -left-4 text-secoundry hover:text-dark text-3xl cursor-pointer hover:scale-125 transition-all "
            onClick={previous}
          >
            <FaChevronLeft />
          </button>
          <button
            className="md:hidden block button absolute top-1/2 -translate-y-1/2 sm:-right-5 -right-4 text-secoundry hover:text-dark text-3xl cursor-pointer hover:scale-125 transition-all "
            onClick={next}
          >
            <FaChevronRight />
          </button>
        </div>
        {/* <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id}>
              <div className="flex items-center gap-4 mb-6">
                <p className="md:text-[50px] md:leading-[50px] text-4xl text-dark">Rating</p>
                <div className="flex gap-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="text-dark text-2xl" />
                  ))}
                </div>
              </div>
              <div className="bg-dark text-primary p-5 rounded-[20px]">
                <div className="flex md:flex-row flex-col items-start gap-3 md:px-[70px] px-5">
                  <Image
                    src={review.image}
                    alt={review.username}
                    width={70}
                    height={70}
                    className='rounded-full md:w-[70px] md:h-[70px] w-16 h-16' />

                  <div className="mt-4">
                    <p className="md:text-2xl text-xl font-medium mb-2">{review.username}</p>
                    <p className="md:text-2xl text-xl font-[100] italic">{review.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Review;
