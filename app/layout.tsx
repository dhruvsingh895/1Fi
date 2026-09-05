import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "1Fi",
  description: "1Fi mobile-first fintech EMI app built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-page text-text-primary">
        <div className="relative mx-auto min-h-screen max-w-md bg-page">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
