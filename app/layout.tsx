import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

export const metadata: Metadata = {
  title: "Joseph Pagliuca's Portfolio",
  description: "Created by Joseph Pagliuca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-screen w-full">{children}</body>
      <Footer />
    </html>
  );
}
