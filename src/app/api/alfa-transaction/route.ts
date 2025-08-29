import { NextResponse } from "next/server";
import crypto from "crypto";

function encryptAES(data: string, keyStr: string) {
  const key = keyStr.substring(0, 16);
  const iv = keyStr.substring(0, 16);
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

export async function POST(req: Request) {
  try {
    const { amount, orderId } = await req.json();
    const merchantId = process.env.HS_MERCHANT_ID!;
    const storeId = process.env.HS_STORE_ID!;
    const channelId = process.env.HS_CHANNEL_ID!;
    const returnUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/alfa-callback`;

    const payload = `HS_MerchantId=${merchantId}&HS_StoreId=${storeId}&HS_ChannelId=${channelId}&HS_TransactionReferenceNumber=${orderId}&HS_TransactionAmount=${amount}&HS_Currency=PKR&HS_ReturnURL=${returnUrl}&HS_IsRedirectionRequest=1`;
    const hash = encryptAES(payload, process.env.HS_MERCHANT_HASH!);

    return NextResponse.json({
      actionUrl: "https://sandbox.bankalfalah.com/HS/HS/HS",
      fields: {
        HS_MerchantId: merchantId,
        HS_StoreId: storeId,
        HS_ChannelId: channelId,
        HS_TransactionReferenceNumber: orderId,
        HS_TransactionAmount: amount,
        HS_Currency: "PKR",
        HS_ReturnURL: returnUrl,
        HS_IsRedirectionRequest: "1",
        HS_RequestHash: hash,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to generate request" }, { status: 500 });
  }
}
