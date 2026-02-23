import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Validation
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

    const firstName = body.name.trim().split(" ")[0];

    // ── 1. Email notification to Gabriel via Resend ────────────────────────
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.EMAIL_FROM ?? "GO AI Systems <noreply@goaisystems.com>",
          to: process.env.CONTACT_EMAIL_TO ?? "hello@goaisystems.com",
          subject: `New lead: ${body.name}`,
          html: `
            <div style="font-family:sans-serif;max-width:520px;margin:auto;padding:24px;">
              <h2 style="color:#06b6d4;margin-bottom:4px;">New Contact Form Submission</h2>
              <p style="color:#64748b;font-size:13px;margin-top:0;">${new Date().toLocaleString()}</p>
              <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0;" />
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr><td style="padding:8px 0;color:#94a3b8;width:80px;">Name</td><td style="color:#f1f5f9;font-weight:600;">${body.name}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="color:#f1f5f9;">${body.email}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Phone</td><td style="color:#f1f5f9;">${body.phone || "—"}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0;" />
              <p style="color:#94a3b8;font-size:13px;margin-bottom:4px;">Message</p>
              <p style="color:#f1f5f9;font-size:14px;line-height:1.6;background:#0f172a;padding:12px 16px;border-radius:8px;">${body.message}</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Resend email failed:", emailErr);
      }
    }

    // ── 2. Opening SMS conversation with the lead via Twilio ───────────────
    if (
      body.phone &&
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
          to: body.phone,
          body:
            `Hey ${firstName}! This is Gabriel from GO AI Systems 👋\n\n` +
            `I just saw your message — thanks for reaching out!\n\n` +
            `I'd love to hop on a quick 30-min call to talk through your situation and see if we're a good fit.\n\n` +
            `What days work best for you this week? Just reply here and we'll lock in a time.\n\n` +
            `— Gabriel`,
        });
      } catch (smsErr) {
        console.error("Twilio SMS failed:", smsErr);
      }
    }

    // Always log to console as fallback
    console.log("=== New Contact Form Submission ===");
    console.log("Name   :", body.name);
    console.log("Email  :", body.email);
    console.log("Phone  :", body.phone || "—");
    console.log("Message:", body.message);
    console.log("Time   :", new Date().toISOString());
    console.log("===================================");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
