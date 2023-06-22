import React from "react";
import { Metadata } from "next";
import "@/stylesheets/global.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
