import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    username: '@customer.review',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: '/images/shop-hygiene.jpg',
    rating: 5,
  },
  {
    id: 2,
    username: '@customer.review',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: '/images/shop-hygiene.jpg',
    rating: 5,
  },
];

const Review = () => {
  return (
    <div className="bg-[#d9efb2] py-10 px-4 md:px-20 ">
      <h2 className="text-5xl  mb-10 text-[#25330A]">Costumer Reviews</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-center gap-4 mb-4 text-black">
              <p className="text-xl font-semibold text-[#25330A]">Rating</p>
              <div className="flex gap-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-[#25330A] text-2xl" />
                ))}
              </div>
            </div>
            <div className="bg-[#25330A] text-[#DBEEB1] p-5 rounded-lg">
              <div className="flex items-start gap-3">
                <div className=''>
                  <Image
                    src={review.image}
                    alt={review.username}
                    width={500}
                    height={200}
                    className='rounded-full w-40 h-10'
                  />

                </div>
                <div className=" mt-4">
                  <p className="font-[600] mb-1 text-xl">{review.username}</p>
                  <p className="font-[300] text-md leading-7 tracking-[2px]">{review.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
