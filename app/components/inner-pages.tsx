"use client";

import { useState } from "react";

const products = [["tablet","Tablet POS"],["mobile","Mobile POS"],["web","Web POS"]];

export function Arrow() { return <span className="inner-arrow">→</span>; }

export function SiteHeader({ active }: { active: string }) {
  const [menuOpen,setMenuOpen] = useState(false);
  const [productsOpen,setProductsOpen] = useState(false);
  return <header className="inner-header"><div className="inner-container inner-nav">
    <a className="inner-logo" href="/"><img src="/assets/aonepos-logo.png" alt="AOnePOS" /></a>
    <button className="inner-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
    <nav className={menuOpen ? "open" : ""}>
      <a className={active==="home" ? "active" : ""} href="/">Home</a>
      <div className={`inner-products ${productsOpen ? "open" : ""}`}><button className={active==="products" ? "active" : ""} onClick={()=>setProductsOpen(!productsOpen)} aria-expanded={productsOpen}>Products⌄</button><div>{products.map(([icon,label])=><a href={`/products#${icon}`} key={icon}><img src={`/assets/product-${icon}-icon.png`} alt="" />{label}</a>)}</div></div>
      <a className={active==="solutions" ? "active" : ""} href="/solutions">Solutions⌄</a>
      <a className={active==="pricing" ? "active" : ""} href="/pricing">Pricing</a>
      <a className={active==="about" ? "active" : ""} href="/about">About</a>
      <a className={active==="contact" ? "active" : ""} href="/contact">Contact</a>
    </nav>
    <a className="inner-demo" href="/contact#contact-form">Book For Demo <Arrow/></a>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="inner-footer"><div className="inner-container">
    <div className="inner-footer-brand"><img src="/assets/aonepos-footer-logo.png" alt="AOnePOS" /></div>
    <div className="inner-footer-grid">
      <div><h3>Social Links</h3><div className="inner-social"><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Twitter">♥</a><a href="#" aria-label="LinkedIn">in</a></div></div>
      <div><h3>About</h3><p>At AONEPOS, we are committed to simplifying and optimizing the way businesses operate. Our all-in-one POS solution empowers retailers and restaurants with fast sales processing, real-time inventory tracking, multi-location management and cloud-based access.</p></div>
      <div><h3>Link</h3><nav><a href="/">Home</a><a href="/products">Products</a><a href="/solutions">Solutions</a><a href="/pricing">Pricing</a><a href="/about">About</a><a href="/contact">Contact</a></nav></div>
      <div><h3>Contact</h3><p>⌖　2727 Lyndon B Johnson Fwy #1050,<br/>　 Dallas, TX 75234</p><p>◔　+866-882-4292</p><p>✉　info@aonepos.com</p></div>
    </div>
  </div><div className="inner-copyright"><div className="inner-container"><span>© Copyright © 2026 Aonepos. All Rights Reserved.</span><div><a href="#">Privacy Policy</a><a href="#">Terms &amp; conditions</a></div></div></div></footer>;
}

export function FAQ({ items = ["Can I get a customized solution?","Is AONEPOS suitable for my type of business?","How secure is AONEPOS?","What integrations are available?","How can I contact support?"] }: { items?: string[] }) {
  const [active,setActive] = useState(1);
  return <div className="inner-faq-list">{items.map((item,i)=><button key={item} className={active===i ? "active" : ""} onClick={()=>setActive(active===i ? -1 : i)} aria-expanded={active===i}><span>{item}</span>{active===i&&<small>Yes. AONEPOS is designed for retail stores, restaurants, cafés, salons and multi-location businesses. The system is flexible and customizable to match your workflow.</small>}</button>)}</div>;
}

export function CTA({ label="Ready To Get Started?", title="Ready To Transform Your Business?" }: { label?: string; title?: string }) {
  return <section className="inner-cta"><div className="inner-container"><div className="inner-cta-box"><span className="inner-label">{label}</span><h2>{title}</h2><p>From fast payments to real-time reporting and multi-store management, AONEPOS gives you everything you need to run your business with confidence.</p><div><a className="inner-primary" href="/contact#contact-form">Get Started <Arrow/></a><a className="inner-secondary" href="/contact#contact-form">Contact Us <Arrow/></a></div></div></div></section>;
}

export function FrameHero({active,eyebrow,title,highlight,text,image,stats}: {active:string;eyebrow:string;title:string;highlight:string;text:string;image?:string;stats?:string[][]}) {
  return <><SiteHeader active={active}/><section className="frame-hero"><div className="inner-container frame-hero-grid"><div><span className="inner-pill">{eyebrow}<Arrow/></span><h1>{title} <span>{highlight}</span></h1><p>{text}</p><div className="inner-hero-actions"><a className="inner-primary" href="/contact#contact-form">Book For Demo <Arrow/></a><a className="inner-secondary" href="#details">See Pricing <Arrow/></a></div>{stats&&<div className="frame-stats">{stats.map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}</div>}</div>{image&&<img className="frame-hero-art" src={image} alt=""/>}</div></section></>;
}

export function SectionTitle({label,title,text}: {label:string;title:string;text?:string}) { return <div className="inner-center section-title"><span className="inner-label">{label}</span><h2>{title}</h2>{text&&<p className="inner-muted">{text}</p>}</div>; }

export function PageIntro({eyebrow,title,highlight,text,active}: {eyebrow:string;title:string;highlight:string;text:string;active:string}) { return <FrameHero active={active} eyebrow={eyebrow} title={title} highlight={highlight} text={text}/>; }

export function ProductMockup({kind="dashboard"}:{kind?:string}) { return <figure className={`frame-dashboard ${kind}`}><img src="/assets/figma-invoice-dashboard.png" alt="AONEPOS dashboard"/></figure>; }
