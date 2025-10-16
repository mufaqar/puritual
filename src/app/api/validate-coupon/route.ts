import { NextResponse } from "next/server";
import WooCommerce from "@/lib/woocommerce"; // ✅ Reuse your existing WooCommerce client

export async function POST(req: Request) {
  try {
    const { coupon_code } = await req.json();
    console.log("🔍 Validating coupon:", coupon_code);

    if (!coupon_code) {
      return NextResponse.json(
        { status: "error", message: "Coupon code is required." },
        { status: 400 }
      );
    }

    // ✅ Use your existing client to query coupons
    const { data } = await WooCommerce.get("coupons", { code: coupon_code });
    console.log("🧾 WooCommerce response:", data);

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({
        status: "invalid",
        message: "Coupon not found or invalid.",
      });
    }

    const coupon = data[0];

    // ✅ Check usage limits
    if (coupon?.usage_limit && coupon?.usage_count >= coupon?.usage_limit) {
      return NextResponse.json({
        status: "invalid",
        message: "Coupon usage limit reached.",
      });
    }

    // ✅ Check if expired
    if (coupon?.date_expires && new Date(coupon.date_expires) < new Date()) {
      return NextResponse.json({
        status: "invalid",
        message: "Coupon expired.",
      });
    }

    return NextResponse.json({
      status: "valid",
      coupon: {
        code: coupon.code,
        amount: coupon.amount,
        discount_type: coupon.discount_type,
        date_expires: coupon.date_expires,
      },
    });
  } catch (error: any) {
    console.error("❌ Coupon validation error:", error.response?.data || error.message);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to validate coupon.",
        details: error.response?.data || error.message,
      },
      { status: 500 }
    );
  }
}
