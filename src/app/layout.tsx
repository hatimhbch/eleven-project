import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: "elevenai",
    template: "%s"
  },
  description: "Articles about anything you think about",
  openGraph: {
    title: {
      default: "elevenai",
      template: "%s"
    },
    description: "Articles about anything you think about",
    images: "/favicon.ico",
    
  },
  icons: {
    icon: "/favicon.ico", // Specify the favicon file
    shortcut: "/favicon.ico", // Optional, for browsers that use the shortcut icon
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
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdLayout)}
        </script>
      </Head>
      <body className={inter.className}>
        <Navbar />
        <h5 className="layouth5">Free articles for everyone</h5>
        {children}
        <Footer />
      </body>
    </html>
  );
}
