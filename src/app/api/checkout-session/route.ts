// app/api/checkout-session/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
  apiVersion: "2025-03-31.basil" as any,
});

export async function POST(req: Request) {
  const { grandTotal, cart, formData } = await req.json()
  const cartItems = cart?.items?.map((item: any) => item.id)

  const line_items = cart?.items?.map((item: any) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: Number(item.price) * 100, // assuming item.price is in USD (e.g. 12.99)
    },
    quantity: item.quantity,
  }));

  const metadata = {
    grandTotal,
    your_name: formData?.your_name,
    country: formData?.country,
    city: formData?.city,
    phone: formData?.phone,
    email: formData?.email,
    company_name: formData?.company_name,
    vat_number: formData?.vat_number,
    cartItems
  };


  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    metadata
  });

  return NextResponse.json({ id: session.id });
}
