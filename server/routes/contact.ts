import type { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";
import { saveContact } from "./db";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
});

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export const handleContact: RequestHandler = async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
  }

  const { name, email, subject, message } = parsed.data;

  // Persist to DB when configured (Mongo/MySQL)
  try {
    await saveContact({ name, email, subject, message, createdAt: new Date() });
  } catch (e) {
    // Non-blocking for email
    console.error("Failed to persist contact message", e);
  }

  const transport = getTransport();

  // Always respond success to avoid leaking email config in prod; include "sent: false" when disabled
  if (!transport) {
    return res.json({ ok: true, sent: false, message: "Email transport not configured" });
  }

  try {
    const to = process.env.TO_EMAIL || process.env.SMTP_USER!;
    await transport.sendMail({
      from: { name, address: process.env.FROM_EMAIL || process.env.SMTP_USER! },
      replyTo: { name, address: email },
      to,
      subject: `[Portfolio Contact] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    });
    return res.json({ ok: true, sent: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return res.status(500).json({ ok: false, error: "Failed to send message" });
  }
};
