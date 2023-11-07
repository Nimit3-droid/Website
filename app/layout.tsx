"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CanvasBackground from "@/components/CanvasBackground";
import BeautifulAnimation from "@/components/BeautifulAnimation";
import ComplexDesign from "@/components/ComplexDesign";
import AdvancedBannerTop from "@/UI/AdvancedBannerTop";
import { ParallaxProvider } from "react-scroll-parallax";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-10">
          <CanvasBackground />
        </div>
      </body>
    </html>
  );
}
