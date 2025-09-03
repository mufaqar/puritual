import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { authToken, orderId, amount } = await req.json();

    const Key1 = process.env.HS_KEY1 || "bwMKXTC7Z83kjGkq";
const Key2 = process.env.HS_KEY2 || "9544597112766595";
const HS_ChannelId = process.env.NEXT_PUBLIC_HS_CHANNEL_ID || "1001";
const HS_MerchantId = process.env.HS_MERCHANT_ID || "32286";
const HS_StoreId = process.env.HS_STORE_ID || "220188";
const HS_ReturnURL = process.env.NEXT_PUBLIC_RETURN_URL || "http://localhost:3000/api/alfa-callback";
const HS_MerchantHash =
  process.env.HS_MERCHANT_HASH ||
  "0aFsbiT8uYBQKWZnuLKZtzSbVcvzxBAbSsjzsmfYwIioaXsfGaNxgPq2Zd8wy9hr";
const HS_MerchantUsername = process.env.HS_USERNAME || "jopoci";
const HS_MerchantPassword =
  process.env.HS_PASSWORD || "X4ncb3xY0YRvFzk4yqF7CA==";


    const mapStringSSO = `AuthToken=${authToken}&RequestHash=&ChannelId=${HS_ChannelId}&Currency=PKR&IsBIN=0&ReturnURL=${HS_ReturnURL}&MerchantId=${HS_MerchantId}&StoreId=${HS_StoreId}&MerchantHash=${HS_MerchantHash}&MerchantUsername=${HS_MerchantUsername}&MerchantPassword=${HS_MerchantPassword}&TransactionTypeId=3&TransactionReferenceNumber=${orderId}&TransactionAmount=${amount}`;

    const cipher = crypto.createCipheriv(
      "aes-128-cbc",
      Buffer.from(Key1),
      Buffer.from(Key2)
    );
    let encrypted = cipher.update(mapStringSSO, "utf8", "base64");
    encrypted += cipher.final("base64");

    // Return HTML form
    const formHtml = `
      <form action="https://payments.bankalfalah.com/SSO/SSO/SSO" method="post">
        <input type="hidden" name="AuthToken" value="${authToken}" />
        <input type="hidden" name="RequestHash" value="${encrypted}" />
        <input type="hidden" name="ChannelId" value="${HS_ChannelId}" />
        <input type="hidden" name="Currency" value="PKR" />
        <input type="hidden" name="IsBIN" value="0" />
        <input type="hidden" name="ReturnURL" value="${HS_ReturnURL}" />
        <input type="hidden" name="MerchantId" value="${HS_MerchantId}" />
        <input type="hidden" name="StoreId" value="${HS_StoreId}" />
        <input type="hidden" name="MerchantHash" value="${HS_MerchantHash}" />
        <input type="hidden" name="MerchantUsername" value="${HS_MerchantUsername}" />
        <input type="hidden" name="MerchantPassword" value="${HS_MerchantPassword}" />
        <input type="hidden" name="TransactionTypeId" value="3" />
        <input type="hidden" name="TransactionReferenceNumber" value="${orderId}" />
        <input type="hidden" name="TransactionAmount" value="${amount}" />
        <button type="submit">PAY ONLINE</button>
      </form>
    `;

    return new NextResponse(formHtml, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
