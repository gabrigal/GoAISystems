import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "name, email, and message are required" },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn("N8N_CONTACT_WEBHOOK_URL not set — logging only");
      console.log("Contact form submission:", body);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone || "",
        message: body.message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error("n8n webhook error:", res.status, await res.text());
      return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
