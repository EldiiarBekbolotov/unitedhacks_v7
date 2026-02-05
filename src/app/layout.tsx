import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "United Hacks V7 | July 10-12, 2026",
  description: "A global high school hackathon for the future. Join students from around the world for an epic weekend of building and learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Jersey+10&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
