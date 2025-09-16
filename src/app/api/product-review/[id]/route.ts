import { NextResponse } from "next/server";
import WooCommerce from "@/lib/woocommerce";

// GET /api/reviews/[id] → Fetch reviews for a product
export async function GET(
  req: Request,
  { params }: { params: { id: number } }
) {
  try {
    // Get reviews for the product ID from params
    const response = await WooCommerce.get("products/reviews", {
      product: params.id, // filter by product ID
      per_page: 10,       // optional: number of reviews to return
      status: "approved", // optional: only approved reviews
    });

   
    return NextResponse.json({ reviews: response.data });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
