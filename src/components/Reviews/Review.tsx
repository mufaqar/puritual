import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    username: '@customer.review',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: '/images/user_dp.png',
    rating: 5,
  },
  {
    id: 2,
    username: '@customer.review',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: '/images/user_dp.png',
    rating: 5,
  },
];

const Review = () => {
  return (
    <section className="bg-primary py-10 md:py-[90px]">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-[60px] md:text-[150px] z-[1] mb-10 relative mx-auto text-dark font-normal capitalize leading-[110px]">
          Costumer Reviews
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default Review;
