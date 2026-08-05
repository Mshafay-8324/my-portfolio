import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Shafay | Software Developer & AI/ML Enthusiast",
  description: "Personal Portfolio of Muhammad Shafay. Computer Science graduate specializing in AI/ML engineering, Python, and Full-Stack web development.",
  keywords: ["Muhammad Shafay", "Software Developer", "AI Developer", "Machine Learning", "Full-Stack Developer", "Portfolio"],
  authors: [{ name: "Muhammad Shafay" }],
  creator: "Muhammad Shafay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-dark text-slate-100 selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
