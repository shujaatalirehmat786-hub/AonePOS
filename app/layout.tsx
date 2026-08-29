import type { Metadata } from "next";
import "./replica.css";
import "./responsive-fixes.css";

export const metadata: Metadata = { title: "AONEPOS — Start and grow your business", description: "The complete POS platform for modern businesses." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
