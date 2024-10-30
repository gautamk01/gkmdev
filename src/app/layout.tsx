import type { Metadata } from "next";
import { Poppins, Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const popins = Poppins({ subsets: ["latin"], variable: "--font-sans", weight: ["300"] });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif", weight: ["400"]
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(calistoga.variable, popins.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}