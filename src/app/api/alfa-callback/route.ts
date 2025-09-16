import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const RC = searchParams.get("RC"); // Response Code
  const RD = searchParams.get("RD"); // Response Description
  const TS = searchParams.get("TS"); // Transaction Status
  const O = searchParams.get("O");   // Order ID (your reference)


  // Redirect to a frontend page with these params
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/order-status?rc=${RC}&rd=${RD}&ts=${TS}&order=${O}`
  );
}
