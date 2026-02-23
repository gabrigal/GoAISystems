import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

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

  const firstName = name.trim().split(" ")[0];

  // Send thank-you SMS via Twilio
  if (
    process.env.TWILIO_ACCOUNT_SID &&
    process.env.TWILIO_AUTH_TOKEN &&
    process.env.TWILIO_PHONE_NUMBER
  ) {
    try {
      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );
      await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
        body: `Hey ${firstName}! This is Gabriel from GO AI Systems 👋 You just booked a free strategy call — I'm looking forward to connecting. Before we chat, can you tell me a little about your current setup? Do you have a CRM, and roughly how many inbound calls/leads are you getting per week?`,
      });
    } catch (err) {
      console.error("Twilio SMS error (pre-book):", err);
      // Don't block the booking flow — continue even if SMS fails
    }
  } else {
    console.warn("Twilio env vars not set — skipping thank-you SMS");
  }

  return NextResponse.json({ success: true });
}
