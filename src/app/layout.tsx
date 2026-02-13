import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "United Hacks V7",
  description: "The world's largest online student-led hackathon. Join participants from around the world for an epic weekend of building and learning.",
  icons: [
    { url: "/favicons/favicon.ico", sizes: "any" },
    { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png", rel: "apple-touch-icon" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B6D6TRH654" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B6D6TRH654');
            `,
          }}
        />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
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
