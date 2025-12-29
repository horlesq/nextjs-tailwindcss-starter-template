"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-muted/30 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={32}
              height={32}
              className="group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-xl tracking-tight text-foreground">
              Starter Brand
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {nav.items.map((item: any, idx: number) => (
              <Link
                key={idx}
                href={item.link}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-muted/30 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-4">
              {nav.items.map((item: any, idx: number) => (
                <Link
                  key={idx}
                  href={item.link}
                  onClick={closeMenu}
                  className="block text-2xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;