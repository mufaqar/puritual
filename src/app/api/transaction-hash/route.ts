import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      AuthToken,
      ChannelId,
      Currency,
      IsBIN,
      ReturnURL,
      MerchantId,
      StoreId,
      MerchantHash,
      MerchantUsername,
      MerchantPassword,
      TransactionTypeId,
      TransactionReferenceNumber,
      TransactionAmount,
    } = body;

    const Key1 = process.env.NEXT_PUBLIC_KEY1!;
    const Key2 = process.env.NEXT_PUBLIC_KEY2!;

    // String to encrypt
    const dataToEncrypt = `AuthToken=${AuthToken}&ChannelId=${ChannelId}&Currency=${Currency}&IsBIN=${IsBIN}&ReturnURL=${ReturnURL}&MerchantId=${MerchantId}&StoreId=${StoreId}&MerchantHash=${MerchantHash}&MerchantUsername=${MerchantUsername}&MerchantPassword=${MerchantPassword}&TransactionTypeId=${TransactionTypeId}&TransactionReferenceNumber=${TransactionReferenceNumber}&TransactionAmount=${TransactionAmount}`;

    const cipher = crypto.createCipheriv(
      "aes-128-cbc",
      Buffer.from(Key1),
      Buffer.from(Key2)
    );
    let encrypted = cipher.update(dataToEncrypt, "utf8", "base64");
    encrypted += cipher.final("base64");

    return NextResponse.json({
      success: true,
      requestHash: encrypted,
    });
  } catch (error: any) {
    console.error("Transaction Hash Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
