import { NextResponse } from "next/server";
import WooCommerce from "@/lib/woocommerce";

export async function GET(
  req: Request,
  { params }: { params: { id: string  } }
) {
  try {  
    
    const productId = parseInt(params.id, 10); 
    const response = await WooCommerce.get("products/reviews", {
      product: productId, 
      per_page: 10,       
      status: "approved"
    });

   
    return NextResponse.json({ reviews: response.data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
