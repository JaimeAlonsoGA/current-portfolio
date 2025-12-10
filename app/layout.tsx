import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Container from "@/components/layout/container";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Jaime Alonso | Fullstack Software Developer",
  description:
    "Developing cutting-edge cross-platform applications and software solutions. Portfolio of Jaime Alonso, full-stack developer specializing in React, React Native, and modern web technologies.",
  keywords: [
    "Jaime Alonso",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "React Native",
    "Portfolio",
  ],
  authors: [{ name: "Jaime Alonso" }],
  creator: "Jaime Alonso",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jaime Alonso | Fullstack Software Developer",
    description:
      "Developing cutting-edge cross-platform applications and software solutions",
    siteName: "Jaime Alonso Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaime Alonso | Software Developer",
    description:
      "Developing cutting-edge cross-platform applications and software solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}