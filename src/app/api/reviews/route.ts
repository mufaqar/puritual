import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { productId, reviewer, review, rating } = await req.json();

  try {
    const baseUrl = process.env.NEXT_PUBLIC_WC_URL; // ✅ frontend-safe
    const key = process.env.WC_CONSUMER_KEY;        // ✅ private
    const secret = process.env.WC_CONSUMER_SECRET;  // ✅ private

    if (!baseUrl || !key || !secret) {
      return NextResponse.json(
        { error: "WooCommerce env vars are missing" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${baseUrl}/wp-json/wc/v3/products/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " + Buffer.from(`${key}:${secret}`).toString("base64"),
        },
        body: JSON.stringify({
          product_id: productId,
          reviewer,
          review,
          rating,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
