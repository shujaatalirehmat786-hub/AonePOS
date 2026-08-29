"use client";

import { useState } from "react";

const productMenu = [["tablet", "Tablet POS"], ["mobile", "Mobile POS"], ["web", "Web POS"]];
const faqs = [
  ["Can I get a customized solution?", "Yes. Our team can tailor AONEPOS around your locations, workflows, integrations, and reporting requirements."],
  ["Is AONEPOS suitable for my type of business?", "Yes. AONEPOS is designed for retail stores, restaurants, cafes, salons, and multi-location businesses. The system is flexible enough to match your workflow."],
  ["How secure is AONEPOS?", "AONEPOS uses secure cloud infrastructure, role-based access, and protected payment workflows to keep your business data safe."],
  ["What integrations are available?", "AONEPOS supports payment, accounting, ecommerce, hardware, and business operations integrations."],
  ["How can I contact support?", "Contact our team by phone or email for onboarding, technical support, and product guidance."],
];
const plans = [
  { name: "BASIC PLAN", monthly: 599, yearly: 479, featured: false, items: ["Cloud-Based POS System", "Inventory Management", "Reports & Analytics", "Employee Management", "Support & Control"] },
  { name: "ENTERPRISE PLAN", monthly: 199, yearly: 159, featured: true, items: ["Cloud-Based POS System", "Inventory Management", "Multi-Location Management", "Reports & Analytics", "Employee Management"] },
  { name: "PREMIUM PLAN", monthly: 149, yearly: 119, featured: false, items: ["Cloud-Based POS System", "Smart Inventory Control", "Customer Management", "Reports & Analytics", "Priority Support"] },
];

function Arrow({ dark = false }: { dark?: boolean }) { return <span className={`rp-arrow ${dark ? "dark" : ""}`}>→</span>; }
function Logo() { return <a className="rp-logo" href="#home" aria-label="AOnePOS home"><img src="/assets/aonepos-logo.png" alt="AOnePOS" /></a>; }

function DashboardArt() {
  return <div className="rp-hero-art" aria-label="AONEPOS analytics dashboard preview">
    <div className="rp-art-circle one"/><div className="rp-art-circle two"/><div className="rp-dot-grid"/>
    <img className="rp-hero-dashboard-image" src="/assets/figma-dashboard.jpg" alt="AONEPOS analytics dashboard showing sales metrics, charts, application funnel, and traffic sources" />
  </div>;
}

function DashboardImage() {
  return <figure className="rp-dashboard-image">
    <img
      src="/assets/pos-dashboard.png"
      alt="AONEPOS point-of-sale dashboard showing products, invoices, stock, totals and payment controls"
      width="4370"
      height="2759"
    />
  </figure>;
}

function Receipt({ restaurant = false }: { restaurant?: boolean }) {
  const rows = restaurant ? [["Grilled Salmon","$42.00"],["Caesar Salad","$18.00"],["Iced Tea (2)","$12.00"]] : [["Shirt — Slim Fit","$42.00"],["Product: Sneakers","$42.00"],["Socks × 2","1X — $42.00"]];
  return <div className="rp-receipt">{rows.map(([a,b],i)=><div key={a}><i className={`rp-thumb t${i}`}/><span>{a}</span><strong>{b}</strong></div>)}<b><span>TOTAL</span><strong>{restaurant ? "$72.00" : "$145.00"}</strong></b></div>;
}

export default function Page() {
  const [menuOpen,setMenuOpen] = useState(false), [monthly,setMonthly] = useState(true), [openFaq,setOpenFaq] = useState(1);
  return <div className="rp-page" id="home">
    <header className="rp-header"><div className="rp-container rp-nav"><Logo/><button className="rp-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button><nav className={menuOpen ? "open" : ""}><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a><div className="rp-products-menu"><button aria-haspopup="true">Products⌄</button><div>{productMenu.map(([icon,label])=><a href="#solutions" key={label} onClick={()=>setMenuOpen(false)}><i className={icon}/>{label}</a>)}</div></div><a href="#why" onClick={()=>setMenuOpen(false)}>Solutions⌄</a><a href="#pricing" onClick={()=>setMenuOpen(false)}>Pricing</a><a href="#about" onClick={()=>setMenuOpen(false)}>About</a><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></nav><a className="rp-demo rp-desktop-demo" href="#contact">Book For Demo <Arrow dark/></a></div></header>
    <main>
      <section className="rp-hero"><div className="rp-container rp-hero-inner"><div className="rp-hero-copy"><span className="rp-pill">All-in-one POS platform <Arrow/></span><h1>One System Every Part<br/>Of Your <span>Business.</span></h1><p>Run your retail business with one powerful POS platform built to simplify checkout, inventory, reporting, customer management and multi-location operations.</p><div className="rp-actions"><a className="rp-primary" href="#contact">Book For Demo <Arrow dark/></a><a className="rp-secondary" href="#pricing">See Pricing <Arrow/></a></div><div className="rp-stats"><div><strong>10+</strong><span>Integrated modules</span></div><div><strong>3</strong><span>POS platforms</span></div><div><strong>Real-Time</strong><span>Reports & analytics</span></div></div></div><DashboardArt/></div></section>
      <section className="rp-partners"><div className="rp-container"><h2>Our Businesses Partners Worldwide</h2><div><span>KYWELL<small>more than a Printer</small></span><span>PARTNER<small>CARE · TRUST · RESPONSIBILITY</small></span><span>◉ PAX<small>Empowering Digital Payments</small></span><span>stark<small>microincs</small></span><span>EPSON</span></div></div></section>
      <section className="rp-why" id="why"><div className="rp-container rp-two-col"><div><span className="rp-label">Why AONEPOS</span><h2>Why Choose AONEPOS<br/>As Your Retail POS?</h2><p>From tracking inventory to completing sales, you need a system that’s fast, flexible, and built to keep you ahead of the competition. AONEPOS adapts to your workflow — so you can focus on what matters most: serving customers and growing your business.</p><div className="rp-benefit"><i>01</i><div><h3>Fast & Intuitive Checkout</h3><p>Speed Up Everyday Transactions With A Clean, Easy-To-Use POS Interface Designed For Busy Retail Teams.</p></div></div><div className="rp-benefit"><i>02</i><div><h3>Multi-Location Management</h3><p>Manage Multiple Stores, Teams And Operations From One Centralized System With Complete Visibility.</p></div></div></div><div className="rp-retail-art"><div className="rp-payment retail"><b>✓</b><span><small>Payment Successful</small><strong>+$250.00</strong><em>Payment #1032<br/>Today, 3:30 PM</em></span></div><div className="rp-shop-card"><h3>AONEPOS</h3><Receipt/></div></div></div></section>
      <section className="rp-insights"><div className="rp-container"><div className="rp-section-head"><span className="rp-label">Insights</span><h2>Turn Everyday Sales Into Better<br/>Business Decisions</h2><p>AONEPOS helps you monitor sales trends, track inventory movement, and understand customer behavior — all from one powerful dashboard designed for growing businesses.</p></div><div className="rp-insight-grid">{[["▤","25%","Improved Inventory Accuracy Across Stores And Warehouses."],["▧","15%","More Efficient Checkout With Faster Transaction Times."],["▥","$12,840","Average Daily Sales Tracked In Real Time."]].map(([i,n,t])=><article key={n}><i>{i}</i><strong>{n}</strong><p>{t}</p></article>)}</div></div></section>
      <section className="rp-dashboard-section" id="about"><div className="rp-container"><div className="rp-section-head"><span className="rp-label">Business Dashboard</span><h2>Start And Grow Your Business<br/>With AONEPOS</h2><p>Unlock real-time insights that help you grow smarter and faster. From sales trends to inventory performance, AONEPOS gives you the clarity you need to stay ahead of the competition.</p></div><DashboardImage/></div></section>
      <section className="rp-solutions" id="solutions"><div className="rp-container"><div className="rp-section-head"><span className="rp-label">Tailored Solutions</span><h2>POS Solutions Built For Your Business</h2><p>Unlock real-time insights that help you grow smarter and faster. From sales trends to inventory performance, AONEPOS gives you the clarity.</p></div><div className="rp-solution-grid"><article><h3><i>▥</i>Retail</h3><p>A faster, simpler way to manage sales, inventory and customers across every storefront.</p><ul>{["Fast & Intuitive Checkout","Smart Inventory Control","Multi-Store Management","Customer Insights & Reports"].map(x=><li key={x}>✓　{x}</li>)}</ul><Receipt/></article><article><h3><i>♨</i>Restaurant</h3><p>Simplify ordering, payments and daily operations for fast-moving dining environments.</p><ul>{["Quick Order & Payment Processing","Kitchen Display Integration","Table & Staff Management","Real-Time Sales Reports"].map(x=><li key={x}>✓　{x}</li>)}</ul><Receipt restaurant/></article></div></div></section>
      <section className="rp-pricing" id="pricing"><div className="rp-container"><div className="rp-section-head"><span className="rp-label">Pricing Solutions</span><h2>Plans That Fit Your Business</h2><p>The perfect POS plan designed to support businesses of every size, from small shops to large multi-store operations.</p><div className="rp-toggle"><button className={monthly?"active":""} onClick={()=>setMonthly(true)} aria-pressed={monthly}>Monthly</button><button className={!monthly?"active":""} onClick={()=>setMonthly(false)} aria-pressed={!monthly}>Yearly</button></div></div><div className="rp-plan-grid">{plans.map(plan=><article className={plan.featured?"featured":""} key={plan.name}><div className="rp-plan-top"><small>{plan.name}</small><strong>${monthly?plan.monthly:plan.yearly}<em>{monthly?"/ Per Month":"/ Per Year"}</em></strong><a href="#contact">Get Started</a></div><h3>This Package Includes:</h3><ul>{plan.items.map(x=><li key={x}>✓　{x}</li>)}</ul></article>)}</div></div></section>
      <section className="rp-faq"><div className="rp-container"><div className="rp-section-head"><span className="rp-label">FAQ’S</span><h2>Frequently Asked Questions</h2><p>Unlock real-time insights that help you grow smarter and faster. From sales trends to inventory performance, AONEPOS gives you the clarity.</p></div><div className="rp-faq-list">{faqs.map(([q,a],i)=><button className={openFaq===i?"active":""} onClick={()=>setOpenFaq(openFaq===i?-1:i)} key={q} aria-expanded={openFaq===i}><span>{q}</span>{openFaq===i&&<small>{a}</small>}</button>)}</div></div></section>
      <section className="rp-cta" id="contact"><div className="rp-container"><div className="rp-cta-box"><span className="rp-label">GET STARTED WITH AONEPOS</span><h2>Ready To Transform Your Business?</h2><p>See how AONEPOS can simplify your operations, boost sales and help your business grow. We’re here to help you get started, step by step.</p><div className="rp-actions"><a className="rp-primary" href="mailto:info@aonepos.com">Start Free 30-Day Trial <Arrow dark/></a><a className="rp-secondary" href="mailto:info@aonepos.com">Book A Demo <Arrow/></a></div></div></div></section>
    </main>
    <footer className="rp-footer"><div className="rp-container"><div className="rp-footer-brand"><img className="rp-footer-logo" src="/assets/aonepos-logo.png" alt="AOnePOS"/></div><div className="rp-footer-grid"><div><h3>Social Links</h3><div className="rp-social"><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Twitter">♥</a><a href="#" aria-label="LinkedIn">in</a></div></div><div><h3>About</h3><p>At AONEPOS, We Are Committed To Simplifying And Optimizing The Way Businesses Operate. Our All-In-One POS Solution Empowers Retailers And Restaurants With Fast Sales Processing, Real-Time Inventory Tracking, Multi-Location Management, And Cloud-Based Access — All Designed To Help You Grow Smarter And Faster.</p></div><div><h3>Link</h3><nav><a href="#home">Home</a><a href="#solutions">Products</a><a href="#why">Solutions</a><a href="#pricing">Pricing</a><a href="#about">About</a><a href="#contact">Contact</a></nav></div></div></div><div className="rp-copyright"><div className="rp-container">© Copyright © 2026 Aonepos. All Rights Reserved.</div></div></footer>
  </div>;
}
