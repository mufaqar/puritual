import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviewform = ({ productId }: { productId: number }) => {
    const [formData, setFormData] = useState({
        name: "",
        review: "",
        rating: 0,
    });

    const [hover, setHover] = useState(0);

    // Handle input/textarea changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

   // Handle form submit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId,              // ✅ comes from props
        reviewer: formData.name,
        review: formData.review,
        rating: formData.rating,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Review submitted successfully!");
      // reset form
      setFormData({ name: "", review: "", rating: 0 });
      setHover(0);
    } else {
      alert("❌ Failed: " + (data.message || data.error));
    }
  } catch (err) {
    console.error(err);
    alert("❌ Something went wrong!");
  }
};

    return (
        <div className="md:w-2/3 w-full mx-auto px-4 bg-primary py-16 md:px-10">
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="sm:flex gap-10 space-y-5 sm:space-y-0">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="block w-full rounded-lg bg-dark p-4 text-sm text-primary border-none focus:outline-secoundry"
                        required
                    />
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-dark font-medium mb-2">Rating</label>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                type="button"
                                key={star}
                                onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className="focus:outline-none"
                            >
                                <FaStar
                                    className={`w-7 h-7 ${star <= (hover || formData.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-dark"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Review */}
                <div>
                    <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                        placeholder="Write your review"
                        className="block w-full rounded-lg bg-dark p-4 text-sm text-primary border-none focus:outline-secoundry"
                        rows={6}
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="relative">
                    <button
                        type="submit"
                        className="uppercase w-fit mx-auto bg-dark text-white hover:bg-secoundry px-3 py-2 text-base relative z-20 flex text-center justify-center items-center shadow-[3px_3px_0_3px_rgb(174,208,54)] hover:shadow-[0px_0px_0_0px_rgb(174,208,54)] transition-all duration-300 ease-linear"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Reviewform;
