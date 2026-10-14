"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type LeadType = "contact" | "demo" | "trial";
type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };

const SUCCESS: Record<LeadType, string> = {
  contact: "Thanks — your message has been sent. Our team will get back to you shortly.",
  demo: "Thanks — your demo request has been sent. We will contact you to schedule a time.",
  trial: "Thanks — your trial request has been sent. We will contact you to confirm your setup and activate your trial.",
};

declare global { interface Window { dataLayer?: Record<string, unknown>[]; gtag?: (...args: unknown[]) => void } }

function trackLead(type: LeadType) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead", lead_type: type });
  window.gtag?.("event", "generate_lead", { lead_type: type });
}

function Arrow() { return <span className="contact-arrow">→</span>; }

export default function LeadForm({ type, title, submitLabel }: { type: LeadType; title: string; submitLabel: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [context, setContext] = useState("");
  const startedAt = useRef(Date.now());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan"), topic = params.get("topic");
    if (plan) setContext(`Interested in plan: ${plan.slice(0, 40)}`);
    else if (topic === "compatibility") setContext("Hardware compatibility check");
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget, data = new FormData(form);
    setStatus({ state: "sending" });
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data), consent: data.get("consent") === "on", type, context, startedAt: startedAt.current }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error);
      trackLead(type);
      form.reset();
      setStatus({ state: "success", message: SUCCESS[type] });
    } catch (error) {
      setStatus({ state: "error", message: (error instanceof Error && error.message) || "We could not send your request. Please email info@aonepos.com or call +1 866-882-4292." });
    }
  };

  return <form className="contact-form" onSubmit={submit}>
    <h3>{title}</h3>
    {context && <p className="lead-context">{context}</p>}
    <div className="form-row"><label>First Name<input name="firstName" placeholder="Enter your first name" maxLength={100} required /></label><label>Last Name<input name="lastName" placeholder="Enter your last name" maxLength={100} required /></label></div>
    <label>Email Address<input type="email" name="email" placeholder="you@company.com" maxLength={254} required /></label>
    {type !== "contact" && <div className="form-row"><label>Business Name<input name="business" placeholder="Your business name" maxLength={200} required /></label><label>Phone (optional)<input type="tel" name="phone" placeholder="Your phone number" maxLength={40} /></label></div>}
    <label>{type === "contact" ? "Message" : "Anything we should know? (optional)"}<textarea name="message" rows={4} maxLength={5000} placeholder={type === "contact" ? "Tell us how we can help..." : "What you sell, how many registers, and the printers or card terminals you use."} required={type === "contact"} /></label>
    <label className="lead-hp" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label className="lead-consent"><input type="checkbox" name="consent" required /><span>I agree that AOne POS may contact me by email or phone about this request. We use these details only to respond to it.</span></label>
    <button className="contact-primary" type="submit" disabled={status.state === "sending"}>{status.state === "sending" ? "Sending…" : submitLabel} <Arrow/></button>
    {(status.state === "success" || status.state === "error") && <p className={`lead-status ${status.state}`} role={status.state === "error" ? "alert" : "status"}>{status.message}</p>}
  </form>;
}
