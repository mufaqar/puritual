// app/api/alfalah/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const transactionData = await req.json();

    // ✅ Fallback config values if .env is missing
    const Key1 = process.env.HS_KEY1 || "bwMKXTC7Z83kjGkq";
    const Key2 = process.env.HS_KEY2 || "9544597112766595";
    const HS_ChannelId = process.env.NEXT_PUBLIC_HS_CHANNEL_ID || "1001";
    const HS_MerchantId = process.env.NEXT_PUBLIC_HS_MERCHANT_ID || "32286";
    const HS_StoreId = process.env.NEXT_PUBLIC_HS_STORE_ID || "220188";
    const HS_ReturnURL =
      process.env.NEXT_PUBLIC_RETURN_URL ||
      "http://localhost:3000/api/alfa-callback";
    const HS_MerchantHash =
      process.env.NEXT_PUBLIC_HS_MERCHANT_HASH ||
      "0aFsbiT8uYBQKWZnuLKZtzSbVcvzxBAbSsjzsmfYwIioaXsfGaNxgPq2Zd8wy9hr";
    const HS_MerchantUsername = process.env.NEXT_PUBLIC_HS_USERNAME || "jopoci";
    const HS_MerchantPassword =
      process.env.NEXT_PUBLIC_HS_PASSWORD || "X4ncb3xY0YRvFzk4yqF7CA==";

    console.log("🔑 Config Loaded:", {
      Key1,
      Key2,
      HS_ChannelId,
      HS_MerchantId,
      HS_StoreId,
      HS_ReturnURL,
      HS_MerchantUsername,
    });

    // ✅ 1. Generate Auth Hash
    const hashString = `${Key1}:${Key2}:${HS_MerchantId}:${HS_StoreId}`;
    const AuthHash = crypto.createHash("sha256").update(hashString).digest("hex");

    console.log("🔐 Generated AuthHash:", AuthHash);

    // ✅ 2. Call Handshake API
    const handshakeResponse = await fetch(
      "https://sandbox.bankalfalah.com/HS/HS/HS",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          HS_MerchantId,
          HS_StoreId,
          AuthHash,
        }),
      }
    );

    const handshakeJson = await handshakeResponse.json();
    console.log("🤝 Handshake Response:", handshakeJson);

    if (!handshakeJson.AuthToken) {
      return NextResponse.json(
        { error: "Handshake failed", details: handshakeJson },
        { status: 400 }
      );
    }

    const AuthToken = handshakeJson.AuthToken;

    // ✅ 3. Prepare Transaction Payload
    const transactionRequest = {
      AuthToken,
      ChannelId: HS_ChannelId,
      Currency: "PKR",
      IsBIN: "10",
      ReturnURL: HS_ReturnURL,
      MerchantId: HS_MerchantId,
      StoreId: HS_StoreId,
      MerchantHash: HS_MerchantHash,
      MerchantUsername: HS_MerchantUsername,
      MerchantPassword: HS_MerchantPassword,
      TransactionTypeId: transactionData.transactionType,
      TransactionReferenceNumber: transactionData.orderId,
      TransactionAmount: transactionData.amount,
    };

    console.log("📦 Transaction Payload:", transactionRequest);

    // ✅ 4. Call Payment API
    const paymentResponse = await fetch(
      "https://sandbox.bankalfalah.com/SSO/SSO/SSO",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionRequest),
      }
    );

    const paymentJson = await paymentResponse.json();
    console.log("💳 Payment Response:", paymentJson);

    return NextResponse.json(paymentJson);
  } catch (error: any) {
    console.error("❌ Error Processing Payment:", error);
    return NextResponse.json(
      { error: "Payment process failed", details: error.message },
      { status: 500 }
    );
  }
}
