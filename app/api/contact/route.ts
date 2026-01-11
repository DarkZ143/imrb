import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* =========================
       1️⃣ EMAIL TO YOU
    ========================== */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>📩 New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    /* =========================
       2️⃣ AUTO-REPLY TO USER
    ========================== */
    await transporter.sendMail({
      from: `"Rahul Kumar" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me 👋",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2 style="color:#06b6d4">Hi ${name},</h2>

          <p>
            Thanks for reaching out! I’ve received your message and
            really appreciate you taking the time to contact me.
          </p>

          <p>
            I’ll review your message and get back to you as soon as possible
            (usually within 24 hours).
          </p>

          <hr style="margin:20px 0" />

          <p style="font-size:14px;color:#555">
            Regards,<br />
            <strong>Rahul Kumar</strong><br />
            Full-Stack Developer<br />
            🌐 imrb.netlify.app
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
