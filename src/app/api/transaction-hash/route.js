// app/api/transaction-hash/route.js
import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      MerchantId,
      StoreId,
      MerchantHash,
      TransactionReferenceNumber,
      TransactionAmount,
      Currency,
      ReturnURL,
    } = body;

    // 🔥 Example hash calculation (adjust to AlphaPay docs)
    const rawString = `${MerchantId}${StoreId}${TransactionReferenceNumber}${TransactionAmount}${Currency}${ReturnURL}${MerchantHash}`;
    const requestHash = crypto
      .createHash("sha256")
      .update(rawString)
      .digest("hex");

    return new Response(
      JSON.stringify({ requestHash }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
