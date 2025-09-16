import { NextResponse } from "next/server";
import WooCommerce from "@/lib/woocommerce";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } } // use `context`, not inline destructure
) {
  try {
    const productId = parseInt(context.params.id, 10);

    const response = await WooCommerce.get("products/reviews", {
      product: productId,
      per_page: 10,
      status: "approved",
    });

    return NextResponse.json({ reviews: response.data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
