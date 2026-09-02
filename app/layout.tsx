import type { Metadata } from "next";
import "./replica.css";
import "./responsive-fixes.css";
import "./footer-fix.css";
import "./inner-pages.css";
import "./pricing-fix.css";
import "./home-polish.css";
import "./hero-assets.css";
import "./footer-final.css";
import "./solution-assets.css";
import "./home-copy.css";
import "./why-assets.css";
import "./figma-home-final.css";
import "./frame-pages.css";
import "./home-frame.css";

export const metadata: Metadata = { title: "AOne POS — Retail & Restaurant Point of Sale", description: "Checkout, inventory, purchase orders, kitchen display and digital menu boards in one POS system, with no hardware lock-in or payment-processing markup." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
