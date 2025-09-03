import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { orderId } = await req.json();

    const Key1 = process.env.NEXT_PUBLIC_KEY1!;
    const Key2 = process.env.NEXT_PUBLIC_KEY2!;
    const HS_ChannelId = process.env.NEXT_PUBLIC_HS_CHANNEL_ID!;
    const HS_MerchantId = process.env.NEXT_PUBLIC_HS_MERCHANT_ID!;
    const HS_StoreId = process.env.NEXT_PUBLIC_HS_STORE_ID!;
    const HS_ReturnURL = process.env.NEXT_PUBLIC_RETURN_URL!;
    const HS_MerchantHash = process.env.NEXT_PUBLIC_HS_MERCHANT_HASH!;
    const HS_MerchantUsername = process.env.NEXT_PUBLIC_HS_USERNAME!;
    const HS_MerchantPassword = process.env.NEXT_PUBLIC_HS_PASSWORD!;

    const mapString = `HS_ChannelId=${HS_ChannelId}&HS_IsRedirectionRequest=0&HS_MerchantId=${HS_MerchantId}&HS_StoreId=${HS_StoreId}&HS_ReturnURL=${HS_ReturnURL}&HS_MerchantHash=${HS_MerchantHash}&HS_MerchantUsername=${HS_MerchantUsername}&HS_MerchantPassword=${HS_MerchantPassword}&HS_TransactionReferenceNumber=${orderId}`;

    const cipher = crypto.createCipheriv(
      "aes-128-cbc",
      Buffer.from(Key1),
      Buffer.from(Key2)
    );
    let encrypted = cipher.update(mapString, "utf8", "base64");
    encrypted += cipher.final("base64");

    const payload = new URLSearchParams({
      HS_ChannelId,
      HS_IsRedirectionRequest: "0",
      HS_MerchantId,
      HS_StoreId,
      HS_ReturnURL,
      HS_MerchantHash,
      HS_MerchantUsername,
      HS_MerchantPassword,
      HS_TransactionReferenceNumber: orderId,
      HS_RequestHash: encrypted,
    });

    

    const response = await fetch("https://payments.bankalfalah.com/HS/HS/HS", {
      method: "POST",
      body: payload.toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

  

    const result = await response.json();

    if (!result.AuthToken) {
      throw new Error("Failed to get AuthToken");
    }

    return NextResponse.json({
      success: true,
      authToken: result.AuthToken,
      handshakeHash: encrypted,
      data: result,
    });
  } catch (error: any) {
    console.error("Handshake Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
