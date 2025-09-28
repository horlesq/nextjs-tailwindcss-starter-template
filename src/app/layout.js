import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: {
        template: "%s | Next.js Starter",
        default: "Next.js + Tailwind CSS Starter",
    },
    description: "A clean starter template for Next.js with Tailwind CSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
                />
            </head>
            <body
                className={`${inter.className} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
            >
                <Header />

                <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-6xl mx-auto w-full">{children}</div>
                </main>

                <Footer />
            </body>
        </html>
    );
}
