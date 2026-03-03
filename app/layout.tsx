import type { Metadata } from "next";
import { Inter, Outfit, Inter_Tight } from "next/font/google";
import "./globals.css";
import Lightbox from "@/components/Lightbox";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-tight",
});

export const metadata: Metadata = {
  title: "JANTA SAW MILL (JSM) | Premium Timber & Luxury Wood Interiors",
  description:
    "Government of India Recognised | 30+ Years of Excellence. Best Luxury Timber Merchant in MP, Premium Teakwood Supplier, and Bespoke Wooden Doors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${interTight.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans antialiased text-stone-900 bg-stone-50"
      >
        <Lightbox />
        {children}
      </body>
    </html>
  );
}
