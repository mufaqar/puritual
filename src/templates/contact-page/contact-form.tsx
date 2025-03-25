"use client";
import SquareButton from "@/components/ui/square-button";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="">
      {submitted ? (
        <p className="text-green-600 text-center">
          Thank you for contacting us!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="sm:flex gap-10 space-y-5 sm:space-y-0">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full px-3 py-3 border-b border-dark text-dark focus:ring-0 focus:outline-none"
              required
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full px-3 py-3 border-b border-dark text-dark focus:ring-0 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-3 border-b border-dark text-dark focus:ring-0 focus:outline-none"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-3 py-3 border-b border-dark text-dark h-[100px] focus:ring-0 focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="relative">
            <SquareButton className="hidden md:block">
              <p className="uppercase flex h-full p-2 px-[21px] pt-4 justify-center items-center text-center">
                Send Message
              </p>
            </SquareButton>
          </div>
        </form>
      )}
    </div>
  );
}
