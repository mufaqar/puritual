import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
  apiVersion: "2025-03-31.basil" as any, 
});

export async function GET(req: NextRequest) {
  const session_id = req.nextUrl.searchParams.get("session_id");
  if (!session_id) return new Response("Missing session_id", { status: 400 });

  const session = await stripe.checkout.sessions.retrieve(session_id);
  return new Response(JSON.stringify(session), { status: 200 });
}
