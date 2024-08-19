import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Head from "next/head";
import GoogleAnalytics from '@/app/GoogleAnalytics';

export const metadata: Metadata = {
  title: "elevenai",
  description: "Articles about anything you think about. ai , programming, image generator models and any ai models",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "ai",
    "Python",
    "java",
    "javascript",
    "typescript",
    "prisma"
  ],
  authors: [
    {
      name: "hatim",
      url: "https://elevenai.co",
    },
  ],
  creator: "hatim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elevenai.co",
    title: "elevenai",
    description: "Articles about anything you think about",
    siteName: "elevenai",
  },
  twitter: {
    card: "summary_large_image",
    title: "elevenai",
    description: "Articles about anything you think about",
    creator: "@elevenaico",
    images: "/opengraph-image.png",
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon-180x180.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      color: '#f8893a',
      url: '/maskable-icon.svg',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon-16x16.png',
    },
  ],
  manifest: 'https://elevenai.co/manifest.json',
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLdLayout = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "elevenai",
    datePublished: "26-07-2024",
    author: {
      "@type": "Person",
      name: "Hatim",
    },
    publisher: {
      "@type": "Organisation",
      name: "elevenai",
      logo: {
        "@type": "ImageObject",
        url: "/favicon.png",
      },
    },
    icons: "/favicon.ico",
    description: "Articles about anything you think about",
    image: "./opengraph-image.png",
  };

  return (
    <html lang="en">
      <GoogleAnalytics />
      <Head>
          <link rel="icon" href="https://elevenai.co/favicon-192x192.png" sizes="192x192" />  {/* Preferred high-resolution PNG */}
          <link rel="apple-touch-icon" href="https://elevenai.co/favicon-32x32.png" sizes="32x32" /> {/* For Apple devices */}
          <script type="application/ld+json">
          {JSON.stringify(jsonLdLayout)}
          </script>
      </Head>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6737031283367585"
      crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <h5 className="layouth5">Free articles for everyone</h5>
        {children}
        <Footer />
      </body>
    </html>
  );
}
