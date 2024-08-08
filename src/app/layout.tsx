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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
