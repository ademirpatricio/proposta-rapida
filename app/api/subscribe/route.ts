import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key não configurada" }, { status: 500 });
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      groups: process.env.MAILERLITE_GROUP_ID
        ? [process.env.MAILERLITE_GROUP_ID]
        : [],
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("MailerLite error:", err);
    return NextResponse.json({ error: "Falha ao cadastrar" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
