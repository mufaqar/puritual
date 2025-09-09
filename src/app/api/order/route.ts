import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const orderId = searchParams.get("orderId");

  if (!orderId) {
    return NextResponse.json({ error: "Order ID missing" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wc/v3/orders/${orderId}?consumer_key=${process.env.NEXT_PUBLIC_WC_CONSUMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch order");
    }

    const order = await res.json();
    return NextResponse.json(order);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
