import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: { name?: string; phone?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_PREBOOK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("N8N_PREBOOK_WEBHOOK_URL not set — logging only");
    console.log("Pre-book submission:", { name, phone });
    return NextResponse.json({ success: true });
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      phone,
      bookedAt: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    console.error("n8n pre-book webhook error:", res.status, await res.text());
    // Don't block the booking flow — still redirect to Google Calendar
  }

  return NextResponse.json({ success: true });
}
