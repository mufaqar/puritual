"use client";

import { useEffect, useState } from "react";

export default function AllReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setReviews(data.reviews || []);
      } catch (err) {
        console.error("Error fetching all reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">All Customer Reviews</h1>

      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-5 border rounded-lg shadow bg-white"
            >
              <p className="font-semibold">{review.reviewer}</p>
              <p className="text-sm text-gray-500">{review.reviewer_email}</p>
              <div
                className="mt-2 text-gray-800 italic"
                dangerouslySetInnerHTML={{ __html: review.review }}
              />
              <p className="mt-2 text-yellow-500">⭐ {review.rating}</p>
              <p className="text-xs text-gray-400">Product ID: {review.product_id}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews found.</p>
      )}
    </section>
  );
}
