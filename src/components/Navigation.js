"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/items", label: "Items" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:block z-10">
                <ul className="flex gap-6 lg:gap-8 items-center">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`font-medium transition-colors hover:text-blue-600 ${
                                    pathname === item.href
                                        ? "text-blue-600"
                                        : "text-gray-700"
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 flex flex-col gap-1 p-2 relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span
                    className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                        isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                ></span>
                <span
                    className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                        isMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                        isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
            </button>

            {/* Mobile Navigation */}
            <nav
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md z-40 transition-transform duration-300 ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col justify-center items-center h-full">
                    <ul className="flex flex-col gap-8 items-center text-xl">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`font-medium transition-colors hover:text-blue-600 ${
                                        pathname === item.href
                                            ? "text-blue-600"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
