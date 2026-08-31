import type { Metadata } from "next";
import "./replica.css";
import "./responsive-fixes.css";
import "./footer-fix.css";
import "./inner-pages.css";
import "./pricing-fix.css";
import "./home-polish.css";
import "./hero-assets.css";
import "./footer-final.css";

export const metadata: Metadata = { title: "AONEPOS — Start and grow your business", description: "The complete POS platform for modern businesses." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
