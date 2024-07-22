"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileDetect from "mobile-detect";
import { useEffect } from "react";
import { metadata } from "./(auth)/defaultLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   const md = new MobileDetect(window.navigator.userAgent);
  //   if (!md.mobile()) {
  //     window.location.href = "/NotSupported";
  //   }
  // }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
