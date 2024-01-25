import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navigation/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Virtual Travel",
  description: "My Virtual Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
