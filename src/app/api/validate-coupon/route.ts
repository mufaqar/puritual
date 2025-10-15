import WooCommerce from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { coupon_code } = await req.json();

  if (!coupon_code) {
    return new NextResponse(
      JSON.stringify({ status: "error", message: "Coupon code is required." }),
      { status: 400 }
    );
  }

  try {
    // Fetch coupon details from WooCommerce
    const response = await WooCommerce.get(`coupons?code=${coupon_code}`);

    if (!response.data.length) {
      return new NextResponse(
        JSON.stringify({ status: "invalid", message: "Invalid coupon code." }),
        { status: 404 }
      );
    }

    const coupon = response.data[0];

    return new NextResponse(
      JSON.stringify({
        status: "valid",
        message: "Coupon applied successfully!",
        coupon: {
          id: coupon.id,
          code: coupon.code,
          amount: coupon.amount,
          discount_type: coupon.discount_type,
          date_expires: coupon.date_expires,
          individual_use: coupon.individual_use,
        },
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.response?.data?.message || "Error validating coupon",
      }),
      { status: 500 }
    );
  }
}
