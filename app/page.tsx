"use client";

import { useState } from "react";

const products = [["tablet", "Tablet POS"], ["mobile", "Mobile POS"], ["web", "Web POS"]];
const partners = [["ZYWELL", "It's more than a printer"], ["PARTNER", "Care · Trust · Responsibility"], ["PAX", "Empowering digital payments"], ["star", "micronics"], ["EPSON", "EXCEED YOUR VISION"], ["ZYWELL", "It's more than a printer"], ["data", "systems"]];
const insightCards = [["▤", "25%", "Improved Inventory Accuracy Across Stores And Warehouses."], ["▥", "15%", "More Efficient Checkout With Faster Transaction Times."], ["▦", "$12,840", "Average Daily Sales Tracked In Real Time."], ["◇", "428", "Orders Processed Today Across All Locations."]];
const plans = [
  { name: "BASIC PLAN", price: 59, featured: false, items: ["Cloud-Based POS System", "Inventory Management", "Reports & Analytics", "Employee Management", "Support & Control"] },
  { name: "ENTERPRISE PLAN", price: 199, featured: true, items: ["Cloud-Based POS System", "Inventory Management", "Multi-Location Management", "Reports & Analytics", "Employee Management"] },
  { name: "PREMIUM PLAN", price: 149, featured: false, items: ["Cloud-Based POS System", "Inventory Management", "Multi-Location Management", "Reports & Analytics", "Employee Management"] },
];
const faqs = [
  ["Can I get a customized solution?", "Yes. Our team can tailor AONEPOS around your locations, workflows, integrations and reporting requirements."],
  ["Is AONEPOS suitable for my type of business?", "Yes. AONEPOS Is Designed For Retail Stores, Restaurants, Cafes, Salons, And Multi-Location Businesses. The System Is Flexible And Customizable To Match Your Workflow."],
  ["How secure is AONEPOS?", "AONEPOS uses secure cloud infrastructure, protected payment workflows and role-based access to keep your business data safe."],
  ["What integrations are available?", "AONEPOS supports payment terminals, accounting tools, ecommerce services and compatible retail hardware."],
  ["How can I contact support?", "You can reach our support team by phone or email for onboarding, technical assistance and product guidance."],
];

function Arrow({ dark = false }: { dark?: boolean }) { return <span className={`hf-arrow${dark ? " dark" : ""}`} aria-hidden="true">→</span>; }

function Receipt({ restaurant = false }: { restaurant?: boolean }) {
  const rows = restaurant ? [["Grilled Salmon", "$24.00", "product-salad.png"], ["Caesar Salad", "$11.00", "product-salad.png"], ["Iced Tea (2)", "$7.00", "product-drink.png"]] : [["Shirt — Slim Fit", "$42.00", "product-shirt.png"], ["Product: Sneakers", "$42.00", "product-shoes.png"], ["Socks × 2", "1 X — $42.00", "product-bag.png"]];
  return <div className="hf-receipt">{rows.map(([name, price, image]) => <div className="hf-receipt-row" key={name}><img src={`/assets/${image}`} alt="" /><span>{name}</span><strong>{price}</strong></div>)}<div className="hf-receipt-total"><b>TOTAL</b><strong>{restaurant ? "$42.00" : "$145.00"}</strong></div></div>;
}

export default function Page() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState(1);

  return <div className="home-frame" id="home">
    <header className="hf-header"><div className="hf-container hf-nav">
      <a className="hf-logo" href="/" aria-label="AOnePOS home"><img src="/assets/aonepos-logo.png" alt="AOnePOS" /></a>
      <button className="hf-menu-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation" aria-expanded={mobileMenu}>☰</button>
      <nav className={mobileMenu ? "open" : ""} aria-label="Main navigation">
        <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
        <div className={`hf-products${productMenu ? " open" : ""}`}><button onClick={() => setProductMenu(!productMenu)} aria-haspopup="true" aria-expanded={productMenu}>Products⌄</button><div className="hf-product-dropdown">{products.map(([icon, label]) => <a href={`/products#${icon}`} key={icon} onClick={() => { setProductMenu(false); setMobileMenu(false); }}><img src={`/assets/product-${icon}-icon.png`} alt="" />{label}</a>)}</div></div>
        <a href="/solutions" onClick={() => setMobileMenu(false)}>Solutions⌄</a><a href="/pricing" onClick={() => setMobileMenu(false)}>Pricing</a><a href="/about" onClick={() => setMobileMenu(false)}>About</a><a href="/contact" onClick={() => setMobileMenu(false)}>Contact</a>
      </nav>
      <a className="hf-button hf-header-cta" href="/contact#contact-form">Book For Demo <Arrow dark /></a>
    </div></header>

    <main>
      <section className="hf-hero"><div className="hf-container hf-hero-inner">
        <div className="hf-hero-copy"><span className="hf-pill">All-in-one POS platform <Arrow /></span><h1>One System Every Part<br />Of Your <span>Business.</span></h1><p>Run your retail business with one powerful POS platform built to simplify checkout, inventory, reporting, customer management and multi-location operations.</p><div className="hf-actions"><a className="hf-button hf-primary" href="/contact#contact-form">Book For Demo <Arrow dark /></a><a className="hf-button hf-secondary" href="#pricing">See Pricing <Arrow /></a></div><div className="hf-hero-stats"><div><strong>10+</strong><span>Integrated modules</span></div><div><strong>3</strong><span>POS platforms</span></div><div><strong>Real-Time</strong><span>Reports &amp; analytics</span></div></div></div>
        <div className="hf-hero-art" aria-label="AONEPOS point of sale preview"><img className="hf-circle-large" src="/assets/hero-ellipse-large.png" alt="" /><img className="hf-circle-small" src="/assets/hero-ellipse-small.png" alt="" /><img className="hf-dots" src="/assets/hero-dot-frame.png" alt="" /><div className="hf-hero-tablet"><img className="hf-hero-tablet-frame" src="/assets/hero-tablet-frame.png" alt="" /><img className="hf-hero-tablet-screen" src="/assets/hero-pos-interface.jpeg" alt="AONEPOS point of sale checkout screen" /></div><img className="hf-hero-payment" src="/assets/hero-payment-card.png" alt="Payment successful confirmation" /><img className="hf-hero-assessment" src="/assets/hero-assessment-chart.png" alt="Assessment score analytics card" /></div>
      </div></section>

      <section className="hf-partners"><h2>Our Businesses Partners Worldwide</h2><div className="hf-partner-track">{partners.map(([name, line], index) => <span className={`hf-partner hf-partner-${index + 1}`} key={`${name}-${index}`}><b>{name}</b><small>{line}</small></span>)}</div></section>

      <section className="hf-why"><div className="hf-container hf-why-grid">
        <div className="hf-why-copy"><span className="hf-label">Why AONEPOS</span><h2>Why Choose AONEPOS<br />As Your Retail POS?</h2><p>From tracking inventory to completing sales, you need a system that’s fast, flexible, and built to keep you ahead of the competition. AONEPOS adapts to your workflow — so you can focus on what matters most: serving customers and growing your business.</p><div className="hf-benefit"><i>01</i><div><h3>Fast &amp; Intuitive Checkout</h3><p>Speed Up Everyday Transactions With A Clean, Easy-To-Use POS Interface Designed For Busy Retail Teams.</p></div></div><div className="hf-benefit"><i>02</i><div><h3>Multi-Location Management</h3><p>Manage Multiple Stores, Teams And Operations From One Centralized System With Complete Visibility.</p></div></div></div>
        <div className="hf-why-art" aria-label="AONEPOS checkout preview"><img className="hf-why-ellipse-large" src="/assets/why-ellipse-large.png" alt="" /><img className="hf-why-ellipse-small" src="/assets/why-ellipse-small.png" alt="" /><img className="hf-why-dots" src="/assets/why-dot-grid.png" alt="" /><img className="hf-why-payment" src="/assets/why-payment-success.png" alt="Payment successful" /><img className="hf-why-checkout" src="/assets/why-checkout.png" alt="AONEPOS checkout receipt" /><img className="hf-why-earnings" src="/assets/why-earnings.png" alt="Earnings summary" /></div>
      </div></section>

      <section className="hf-insights"><div className="hf-container"><div className="hf-section-heading"><span className="hf-label">Insights</span><h2>Turn Everyday Sales Into Better<br />Business Decisions</h2><p>AONEPOS helps you monitor sales trends, track inventory movement, and understand customer behavior — all from one powerful dashboard designed for growing businesses.</p></div><div className="hf-insight-grid">{insightCards.map(([icon, value, copy]) => <article key={value}><i>{icon}</i><strong>{value}</strong><p>{copy}</p></article>)}</div></div></section>

      <section className="hf-dashboard"><div className="hf-container"><div className="hf-section-heading"><span className="hf-label">Business Dashboard</span><h2>Start And Grow Your Business<br />With AONEPOS</h2><p>Unlock real-time insights that help you grow smarter and faster. From sales trends to inventory performance, AONEPOS gives you the clarity you need to stay ahead of the competition.</p></div><figure><img src="/assets/figma-invoice-dashboard.png" alt="AONEPOS business dashboard" /></figure></div></section>

      <section className="hf-solutions"><div className="hf-container"><div className="hf-section-heading"><span className="hf-label">Tailored Solutions</span><h2>POS Solutions Built For Your Business</h2><p>Unlock real-time insights that help you grow smarter and faster. From sales trends to inventory performance, AONEPOS gives you the clarity.</p></div><div className="hf-solution-grid">
        <article><h3><img src="/assets/solution-retail.png" alt="" />Retail</h3><p>A faster, simpler way to manage sales, inventory and customers across every storefront.</p><ul>{["Fast & Intuitive Checkout", "Smart Inventory Control", "Multi-Store Management", "Customer Insights & Reports"].map(item => <li key={item}><img src="/assets/icon-check.png" alt="" />{item}</li>)}</ul><Receipt /></article>
        <article><h3><img src="/assets/solution-restaurant.png" alt="" />Restaurant</h3><p>Simplify ordering, payments and daily operations for fast-moving dining environments.</p><ul>{["Quick Order & Payment Processing", "Kitchen Display Integration", "Table & Staff Management", "Real-Time Sales Reports"].map(item => <li key={item}><img src="/assets/icon-check.png" alt="" />{item}</li>)}</ul><Receipt restaurant /></article>
      </div></div></section>

      <section className="hf-pricing" id="pricing"><div className="hf-container"><div className="hf-section-heading"><span className="hf-label">Pricing Solutions</span><h2>Plans That Fit Your Business</h2><p>The perfect POS plan designed to support businesses of every size, from small shops to large multi-store operations.</p><div className="hf-toggle" aria-label="Billing frequency"><button className={billing === "monthly" ? "active" : ""} onClick={() => setBilling("monthly")} aria-pressed={billing === "monthly"}>Monthly</button><button className={billing === "yearly" ? "active" : ""} onClick={() => setBilling("yearly")} aria-pressed={billing === "yearly"}>Yearly</button></div></div><div className="hf-plan-grid">{plans.map(plan => <article className={plan.featured ? "featured" : ""} key={plan.name}><div className="hf-plan-top"><small>{plan.name}</small><strong>${billing === "yearly" ? Math.round(plan.price * .8) : plan.price}<em>/ Per Monthly</em></strong><a href="/contact#contact-form">Get Started</a></div><h3>This Package Includes:</h3><ul>{plan.items.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="hf-faq"><div className="hf-container"><div className="hf-section-heading"><span className="hf-label">FAQ’S</span><h2>Frequently Asked Questions</h2><p>Unlock real-time insights that help you grow smarter and faster. From sales trends to inventory performance, AONEPOS gives you the clarity.</p></div><div className="hf-faq-list">{faqs.map(([question, answer], index) => <button className={openFaq === index ? "active" : ""} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} key={question} aria-expanded={openFaq === index}><span>{question}<i>{openFaq === index ? "−" : "+"}</i></span>{openFaq === index && <small>{answer}</small>}</button>)}</div></div></section>

      <section className="hf-cta"><div className="hf-container hf-cta-box"><span className="hf-label">GET STARTED WITH AONEPOS</span><h2>Ready To Transform Your Business?</h2><p>See how AONEPOS can simplify your operations, boost sales and help your business grow. Our experts are here to help you get started, step by step.</p><div className="hf-actions"><a className="hf-button hf-primary" href="/contact#contact-form">Start Free 30 Day Trial <Arrow dark /></a><a className="hf-button hf-secondary" href="/contact#contact-form">Book A Demo <Arrow /></a></div></div></section>
    </main>

    <footer className="hf-footer"><div className="hf-container"><div className="hf-footer-brand"><img src="/assets/aonepos-footer-logo.png" alt="AOnePOS" /></div><div className="hf-footer-grid"><div><h3>Social Links</h3><div className="hf-social"><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Twitter">♥</a><a href="#" aria-label="LinkedIn">in</a></div></div><div><h3>About</h3><p>At AONEPOS, We Are Committed To Simplifying And Optimizing The Way Businesses Operate. Our All-In-One POS Solution Empowers Retailers And Restaurants With Fast Sales Processing, Real-Time Inventory Tracking, Multi-Location Management, And Cloud-Based Access — All Designed To Help You Grow Smarter And Faster.</p></div><div><h3>Link</h3><nav><a href="#home">Home</a><a href="/products">Products</a><a href="/solutions">Solutions</a><a href="/pricing">Pricing</a><a href="/about">About</a><a href="/contact">Contact</a></nav></div><div className="hf-contact"><h3>Contact</h3><p><img src="/assets/footer-location.png" alt="" />2727 Lyndon B Johnson Fwy #1050, Dallas, TX 75234</p><p><img src="/assets/footer-phone.png" alt="" />+866-882-4292</p><p><img src="/assets/footer-email.png" alt="" />info@aonepos.com</p></div></div></div><div className="hf-copyright"><div className="hf-container"><span>© Copyright © 2026 Aonepos. All Rights Reserved.</span><nav><a href="/contact">Privacy Policy</a><i /><a href="/contact">Terms &amp; conditions</a></nav></div></div></footer>
  </div>;
}
