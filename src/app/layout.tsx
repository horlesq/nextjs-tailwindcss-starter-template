import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Next.js + Tailwind CSS Starter Template",
        default: "Next.js + Tailwind CSS Starter Template",
    },
    description: "Starter template for modern web applications.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head></head>
            <body
                className={`${inter.className} antialiased min-h-screen flex flex-col bg-background`}
            >
                <Navbar />

                {children}

                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
