import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloom - Premium Flower Boutique",
  authors: [{ name: "Hamza Zain" }],
  creator: "Hamza Zain",
  publisher: "Hamza Zain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
