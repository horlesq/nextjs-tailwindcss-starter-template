"use client";

import Link from "next/link";

export default function Footer() {
    const footerLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/items", label: "Items" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-6xl mx-auto py-8 px-4 sm:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold text-gray-900">
                                nextjs-tailwindcss-starter-template
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                            A clean, modern starter template for Next.js with
                            Tailwind CSS. Perfect for building your next web
                            application.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold text-sm mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()}{" "}
                            nextjs-tailwindcss-starter-template
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span>Created by</span>
                            <a
                                href="https://horly.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                                Horly
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
