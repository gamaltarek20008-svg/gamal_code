import type { IncomingMessage, ServerResponse } from "http";

interface VercelRequest extends IncomingMessage {
  method?: string;
  body?: any;
}

type VercelResponse = ServerResponse & {
  status: (code: number) => VercelResponse;
  json: (body: any) => VercelResponse;
};

import { randomUUID } from "crypto";

const messages: Array<{
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}> = [];

function validate(data: any) {
  const errors: string[] = [];
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  }
  if (!data.email || typeof data.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("A valid email is required");
  }
  if (!data.subject || typeof data.subject !== "string" || data.subject.trim().length < 3) {
    errors.push("Subject must be at least 3 characters");
  }
  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters");
  }
  return errors;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const errors = validate(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, error: errors.join(", ") });
    }

    const { name, email, subject, message } = req.body;
    const newMessage = {
      id: randomUUID(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date(),
    };
    messages.unshift(newMessage);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  }

  if (req.method === "GET") {
    return res.status(200).json({ success: true, data: messages });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
