import { NextResponse } from "next/server";

export async function GET() {
  const data = { message: "Hello from GET!" };
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Do something with the body (e.g., save to DB)
  return NextResponse.json({ received: body, status: "Success" });
}
