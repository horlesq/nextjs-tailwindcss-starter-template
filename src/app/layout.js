import "./globals.css";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
});

export const metadata = {
    title: {
        template: "%s | Starter Template",
        default: "Starter Template",
    },
    description: "A premium starter template for modern web applications.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head></head>
            <body
                className={`${rubik.className} antialiased min-h-screen flex flex-col bg-background`}
            >
                <Navbar />

                {children}

                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
