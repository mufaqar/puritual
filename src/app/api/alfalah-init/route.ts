import { NextResponse } from "next/server";
import { generateRequestHash } from "@/lib/alfalah-encrypt";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    const orderId = `ORDER-${Date.now()}`;

    const payload = {
      HS_IsRedirectionRequest: "1",
      HS_ChannelId: process.env.HS_CHANNEL_ID!,
      HS_ReturnURL: `${process.env.NEXT_PUBLIC_SITE_URL}/api/alfa-callback`,
      HS_MerchantId: process.env.HS_MERCHANT_ID!,
      HS_StoreId: process.env.HS_STORE_ID!,
      HS_MerchantUsername: process.env.HS_MERCHANT_USERNAME!,
      HS_MerchantPassword: process.env.HS_MERCHANT_PASSWORD!,
      HS_TransactionReferenceNumber: orderId,
      HS_Amount: amount,
      HS_Currency: "PKR",
    };

    const hash = generateRequestHash(payload);
    return NextResponse.json({ payload, hash });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to init payment" }, { status: 500 });
  }
}
