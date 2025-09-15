import WooCommerce from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Fetch reviews for given product
    const response = await WooCommerce.get("products/reviews", {
      product: id,
      per_page: 20, // optional: number of reviews per page
      page: 1,      // optional: pagination
    });

    return NextResponse.json({
      status: "success",
      reviews: response.data,
    });
  } catch (error: any) {
    console.error("Error fetching reviews:", error.response?.data || error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to fetch reviews",
        error: error.response?.data || error.message,
      },
      { status: 500 }
    );
  }
}
