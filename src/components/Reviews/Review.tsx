"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import Reviewform from "./reviewform";

interface ReviewType {
  id: number;
  reviewer: string;
  review: string;
  rating: number;
  reviewer_avatar_urls: { [key: string]: string };
}

const Review = ({ productId }: { productId: number }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [reviewOpen, setReviewOpen] = useState(false);


  // Fetch reviews from Woo API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/product-review/${productId}`);
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data = await res.json();

        setReviews(data.reviews);
      } catch (err) {
      }
    };
    fetchReviews();
  }, [productId]);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings: Settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="bg-primary py-10 md:py-[90px] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-[150px] md:leading-[110px] z-[1] mb-10 relative mx-auto text-dark font-normal capitalize">
          Customer Reviews
        </h2>
        <div className="relative mb-16">
          {reviews.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {reviews.map((review) => (
                <div key={review.id} className="md:px-2.5 px-1">
                  <div className="flex items-center gap-4 mb-6">
                    <p className="md:text-[50px] text-2xl text-dark">Rating</p>
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className="text-dark text-2xl" />
                      ))}
                    </div>
                  </div>
                  <div className="bg-dark text-primary py-5 rounded-[20px]">
                    <div className="flex items-start gap-3 md:px-[70px] px-5">
                      <Image
                        src=
                        "/images/user_dp.png"
                        alt={review.reviewer}
                        width={70}
                        height={70}
                        className="rounded-full md:w-[70px] md:h-[70px] w-10 h-10"
                      />
                      <div className="mt-4 review">
                        <p className="md:text-2xl text-xl font-medium mb-2">
                          {review.reviewer}
                        </p>
                        <p
                          className="md:text-2xl text-base font-[100] italic h-[180px] overflow-y-scroll"
                          dangerouslySetInnerHTML={{ __html: review.review }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-dark text-lg italic">No reviews yet.</p>
          )}

          {/* Custom Arrows */}
          <button
            className="md:hidden block absolute top-1/2 -translate-y-1/2 sm:-left-5 -left-4 text-secoundry hover:text-dark text-3xl"
            onClick={previous}
          >
            <FaChevronLeft />
          </button>
          <button
            className="md:hidden block absolute top-1/2 -translate-y-1/2 sm:-right-5 -right-4 text-secoundry hover:text-dark text-3xl"
            onClick={next}
          >
            <FaChevronRight />
          </button>
        </div>

        <button
          onClick={() => setReviewOpen(true)}
          className="uppercase w-fit mx-auto bg-dark text-white hover:bg-secoundry px-3 py-2 text-base relative flex justify-center items-center shadow-[3px_3px_0_3px_rgb(174,208,54)] hover:shadow-[0px_0px_0_0px_rgb(174,208,54)] transition-all duration-300 cursor-pointer"
        >
          Post A Review
        </button>
      </div>

      {/* Review Form Modal */}
      {/* Overlay for outside click (optional, improves UX) */}
      {reviewOpen && (
        <div onClick={() => setReviewOpen(false)} className="fixed inset-0 bg-black/15 z-20" />
      )}
      <div
        className={`${reviewOpen ? "flex" : "hidden"
          } items-center justify-center absolute top-0 inset-x-0 z-20 md:w-2/3 w-full mx-auto px-4`}
      >
        <Reviewform productId={productId} setReviewOpen={setReviewOpen} />
      </div>
    </section>
  );
};

export default Review;
