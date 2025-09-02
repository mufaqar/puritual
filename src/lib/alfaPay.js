export async function alfaHandshake() {
  const response = await fetch("https://sandbox.bankalfalah.com/HS/HS/HS", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: process.env.NEXT_PUBLIC_HS_USERNAME,
      password: process.env.NEXT_PUBLIC_HS_PASSWORD,
      channelId: process.env.NEXT_PUBLIC_HS_CHANNEL_ID,
      storeId: process.env.NEXT_PUBLIC_HS_STORE_ID,
      merchantId: process.env.NEXT_PUBLIC_HS_MERCHANT_ID,
    }),
  });

  return response.json();
}

export async function alfaPaymentRequest(transactionData) {
  const response = await fetch("https://sandbox.bankalfalah.com/SSO/SSO/SSO", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transactionData),
  });

  return response.json();
}
