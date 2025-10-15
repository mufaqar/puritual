"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface CouponSectionProps {
  subTotal: number;
  setDiscount: (amount: number) => void;
}

const CouponSection: React.FC<CouponSectionProps> = ({ subTotal, setDiscount }) => {
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [couponAmount, setCouponAmount] = useState(0);

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code.");
      return;
    }

    setLoading(true);
    setDiscount(0);
    setCouponAmount(0);

    try {
      const res = await fetch("/api/validate-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coupon_code: couponCode }),
      });

      const data = await res.json();

      if (data.status === "valid") {
        const { discount_type, amount } = data.coupon;

        let discountValue = 0;
        if (discount_type === "percent") {
          discountValue = (parseFloat(amount) / 100) * subTotal;
        } else {
          discountValue = parseFloat(amount);
        }

        setDiscount(discountValue);
        setCouponAmount(discountValue);

        toast.success(`Coupon applied! You saved Rs ${discountValue.toFixed(2)}`);
      } else {
        toast.error(data.message || "Invalid coupon code.");
      }
    } catch (error) {
      toast.error("Error validating coupon. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4 border border-secoundry p-4 rounded-xl  text-secoundry">
      <h3 className="font-semibold mb-2 text-lg">Apply Coupon</h3>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1 border border-secoundry outline-none rounded-lg p-2 bg-transparent text-white"
        />
        <button
          onClick={handleApplyCoupon}
          disabled={loading}
          className="bg-secoundry text-black font-medium rounded-lg px-4 py-2 hover:bg-secoundry/90 disabled:opacity-60"
        >
          {loading ? "Checking..." : "Apply"}
        </button>
      </div>

      {couponAmount > 0 && (
        <p className="mt-2 text-green-400 text-sm">
          ✅ Coupon applied — You saved Rs {couponAmount.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default CouponSection;
