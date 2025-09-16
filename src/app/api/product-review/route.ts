import WooCommerce from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

   // Extract review data
    const reviewData = {
      product_id: data?.product_id,  // WooCommerce Product ID
      review: data?.review,          // Review text
      reviewer: data?.name,      // Name of reviewer
      reviewer_email: data?.email, // Email of reviewer
      rating: data?.rating, 
      status: "hold",  
      
    };
    // Create review
    const response = await WooCommerce.post("products/reviews", reviewData);

    return new NextResponse(
      JSON.stringify({
        status: "success",
        message: "Review Created",
        review: response.data,
      }),
      { status: 200 }
    );
  } catch (error: any) {
  console.error("Error creating review:", error.response?.data || error.message || error);

  return new NextResponse(
    JSON.stringify({
      status: "error",
      message: "Failed to create review",
      error: error.response?.data || error.message || error,
    }),
    { status: 500 }
  );
}
}
