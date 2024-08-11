import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: "elevenai",
    template: `%s `,
  },
  description: "Articles about anything you think about",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
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
    images: "/opengraph-image.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
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
        "url": "/favicon.png",
      },
    },
    "icons": "/favicon.ico",
    "description": "Articles about anything you think about",
    "image": "./opengraph-image.png",
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="icon" href="/favicon-192x192.png" />  {/* Preferred high-resolution PNG */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* For Apple devices */}
          <script type="application/ld+json">
          {JSON.stringify(jsonLdLayout)}
          </script>
        </Head>
        <Navbar />
        <h5 className="layouth5">Free articles for everyone</h5>
        {children}
        <Footer />
      </body>
    </html>
  );
}
