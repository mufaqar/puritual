// src/app/api/alfa-callback/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const orderRef = url.searchParams.get("O");
  const success = url.searchParams.get("success");

  if (success === "true") {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?order=${orderRef}`);
  } else {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/payment/failed`);
  }
}
