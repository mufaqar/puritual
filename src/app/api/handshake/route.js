import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    const { orderId } = body;

    // Use environment variables with fallback values
    const merchantId = process.env.HS_MERCHANT_ID || '32286';
    const storeId = process.env.HS_STORE_ID || '220188';
    const merchantHash = process.env.HS_MERCHANT_HASH || '0aFsbiT8uYBQKWZnuLKZtzSbVcvzxBAbSsjzsmfYwIioaXsfGaNxgPq2Zd8wy9hr';
    const username = process.env.HS_USERNAME || 'jopoci';
    const password = process.env.HS_PASSWORD || 'X4ncb3xY0YRvFzk4yqF7CA==';
    const channelId = process.env.HS_CHANNEL_ID || '1001';
    const key1 = process.env.HS_KEY1 || 'AbjYYVRgqe7Cxep2';
    const key2 = process.env.HS_KEY2 || '6029068825205865';
    const returnUrl = process.env.NEXT_PUBLIC_RETURN_URL || 'http://localhost:3000/api/alfa-callback';

    const mapString = 
      `HS_MerchantId=${merchantId}&` +
      `HS_StoreId=${storeId}&` +
      `HS_MerchantHash=${merchantHash}&` +
      `HS_MerchantUsername=${username}&` +
      `HS_MerchantPassword=${password}&` +
      `HS_IsRedirectionRequest=1&` +
      `HS_ReturnURL=${returnUrl}&` +
      `HS_ChannelId=${channelId}&` +
      `HS_TransactionReferenceNumber=${orderId}`;

    const cipher = crypto.createCipheriv(
      "aes-128-cbc",
      Buffer.from(key1),
      Buffer.from(key2)
    );
    let encrypted = cipher.update(mapString, "utf8", "base64");
    encrypted += cipher.final("base64");

    // For simulation, return a success response with a mock auth token
    // In a real implementation, you would call AlphaPay's API
    return Response.json({
      success: true,
      authToken: "uYtmxwFtQxUpp2uL6x4Echgk3WpfpzZcZi/N9k9P58Uv83WqpvuvNMjglFCC15LIDP2UTwJ3iBlbwvMIMca 20BzagNY/92TtQIO9Zs1AvAWQCDb3U1kNUnUpLzW/EFVHB1SUmxDKnQk=",
      handshakePayload: {
        HS_MerchantId: merchantId,
        HS_StoreId: storeId,
        HS_MerchantHash: merchantHash,
        HS_MerchantUsername: username,
        HS_MerchantPassword: password,
        HS_IsRedirectionRequest: "1",
        HS_ReturnURL: returnUrl,
        HS_RequestHash: encrypted,
        HS_ChannelId: channelId,
        HS_TransactionReferenceNumber: orderId,
      },
      bankUrl: `https://sandbox.bankalfalah.com/HS/HS/HS`,
    });
  } catch (error) {
    console.error("Handshake error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { status: 500 }
    );
  }
}