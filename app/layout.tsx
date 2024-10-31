import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rank AI",
  description: "Get boosted ranking insights from our AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Rank AI" />
        <meta
          property="og:description"
          content="Get boosted ranking insights from our AI."
        />
        <meta
          property="og:image"
          content="https://rankings-ai-36f4.vercel.app/preview-image.png"
        />{" "}
        {/* Full URL to the image */}
        <meta
          property="og:url"
          content="https://rankings-ai-36f4.vercel.app/"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rank AI" />
        <meta
          name="twitter:description"
          content="Get boosted ranking insights from our AI."
        />
        <meta
          name="twitter:image"
          content="https://rankings-ai-36f4.vercel.app/preview-image.jpg"
        />
      </head>
      <body
        className={`${inter.className} antialiased px-[20px] md:px-[80px] min-h-screen flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
