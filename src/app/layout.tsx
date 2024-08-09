import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "elevenai",
  description: "Articles about anything you think about",
  openGraph: {
    title: "elevenai",
    description: "Articles about anything you think about",
    images: "/favicon.ico"
  },
  icons: {
    icon: '/favicon.png',
  },};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLdLayout = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "elevenai",
    "datePublished": "26-07-2024",
    "author": {
      "@type": "Person",
      "name": "Hatim",
    },
    "publisher": {
      "@type": "Organisation",
      "name": "elevenai",
      "logo": {
        "@type": "ImageObject",
        "url": "./logo.png"
      }
    },
    "description": "Articles about anything you think about",
    "image": "./opengraph-image.png",
  };

  return (
    <html lang="en">
      <body className={inter.className}>
      <Head>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdLayout)}
      </script>
      </Head>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
