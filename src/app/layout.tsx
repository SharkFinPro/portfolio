import React from "react";
import { Metadata } from "next";
import "./global.css";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    template: "%s | Alex Martin",
    default: "Alex Martin"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  )
}
