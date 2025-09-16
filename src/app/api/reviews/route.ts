import WooCommerce from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await WooCommerce.get("products/reviews", {
      per_page: 20,  // adjust as needed
      status: "approved"
    });

    return NextResponse.json({ reviews: response.data });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
