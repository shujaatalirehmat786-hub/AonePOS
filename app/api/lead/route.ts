import { NextResponse } from "next/server";

// Lead capture endpoint. Validates on the server, filters spam, and emails each lead to the team through Resend.
// Required env vars: RESEND_API_KEY, LEAD_FROM_EMAIL (a sender on a domain verified in Resend).
// Optional: LEAD_TO_EMAIL (defaults to info@aonepos.com).

const LEAD_TYPES = { contact: "Contact enquiry", demo: "Demo request", trial: "Free trial signup" } as const;
type LeadType = keyof typeof LEAD_TYPES;

const FALLBACK = "We could not send your request. Please email info@aonepos.com or call +1 866-882-4292.";
const MIN_FILL_MS = 3000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter(t => now - t < RATE_WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > RATE_LIMIT;
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  // Spam: a hidden honeypot field humans never fill, and a minimum time between page load and submit.
  // Bots get a normal-looking success so they do not adapt.
  const startedAt = Number(body.startedAt);
  if (text(body.website, 200) || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) return NextResponse.json({ ok: true });

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ error: "Too many submissions. Please try again in a few minutes." }, { status: 429 });

  const type = (Object.keys(LEAD_TYPES).includes(body.type as string) ? body.type : "contact") as LeadType;
  const lead = {
    firstName: text(body.firstName, 100),
    lastName: text(body.lastName, 100),
    email: text(body.email, 254),
    phone: text(body.phone, 40),
    business: text(body.business, 200),
    message: text(body.message, 5000),
    context: text(body.context, 200),
  };

  const errors: string[] = [];
  if (!lead.firstName) errors.push("First name is required.");
  if (!lead.lastName) errors.push("Last name is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) errors.push("A valid email address is required.");
  if (lead.phone && !/^[0-9+()\-.\s]{7,40}$/.test(lead.phone)) errors.push("Phone number contains invalid characters.");
  if (type === "contact" && !lead.message) errors.push("Message is required.");
  if (type !== "contact" && !lead.business) errors.push("Business name is required.");
  if (body.consent !== true) errors.push("Please agree to be contacted about your request.");
  if (errors.length) return NextResponse.json({ error: errors.join(" ") }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY, from = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Lead form: RESEND_API_KEY or LEAD_FROM_EMAIL is not configured.");
    return NextResponse.json({ error: FALLBACK }, { status: 503 });
  }

  const name = `${lead.firstName} ${lead.lastName}`.replace(/[\r\n]+/g, " ");
  const lines = [
    `Type: ${LEAD_TYPES[type]}`,
    `Name: ${name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "—"}`,
    `Business: ${lead.business || "—"}`,
    lead.context ? `Context: ${lead.context}` : null,
    "Consent to be contacted: yes",
    `Submitted: ${new Date().toISOString()}`,
    "",
    lead.message || "(no message)",
  ].filter(line => line !== null);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: process.env.LEAD_TO_EMAIL || "info@aonepos.com", reply_to: lead.email, subject: `${LEAD_TYPES[type]} — ${name}`, text: lines.join("\n") }),
    });
    if (!response.ok) {
      console.error("Lead form: Resend responded", response.status, await response.text());
      return NextResponse.json({ error: FALLBACK }, { status: 502 });
    }
  } catch (error) {
    console.error("Lead form: Resend request failed", error);
    return NextResponse.json({ error: FALLBACK }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
