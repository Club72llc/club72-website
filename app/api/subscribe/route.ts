import { NextRequest, NextResponse } from "next/server";

const TAG_ID = 18981802; // "club 72 pre launch"

export async function POST(req: NextRequest) {
  const API_SECRET = process.env.KIT_API_SECRET;

  if (!API_SECRET) {
    console.error("KIT_API_SECRET is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const { firstName, lastName, email, phone } = await req.json();

  try {
    const res = await fetch(`https://api.convertkit.com/v3/tags/${TAG_ID}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_secret: API_SECRET,
        email,
        first_name: firstName,
        fields: { last_name: lastName, phone },
      }),
    });

    const json = await res.json();
    console.log("Kit response:", res.status, JSON.stringify(json).slice(0, 200));

    if (!res.ok) {
      return NextResponse.json({ error: "Subscription failed", detail: json }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
