import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const success = url.searchParams.get("success");
  const orderRef = url.searchParams.get("O");

  if (success === "true") {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?order=${orderRef}`);
  }

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/payment/failed`);
}
