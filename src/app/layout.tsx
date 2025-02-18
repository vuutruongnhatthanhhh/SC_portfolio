import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nhat Thanh",
  description: "Portfolio Nhat Thanh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900`}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full max-w-screen-md px-4">
            <Header />
          </div>

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
