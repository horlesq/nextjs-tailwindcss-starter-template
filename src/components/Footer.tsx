"use client";

import Link from "next/link";
import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import { RiTiktokFill } from "react-icons/ri";

import { footer } from "@/lib/content";

const icons: Record<string, React.ElementType> = {
  facebook: LuFacebook,
  instagram: LuInstagram,
  tiktok: RiTiktokFill,
  linkedin: LuLinkedin,
};

export default function Footer() {
  return (
    <footer className="bg-background-footer mt-auto px-4 sm:px-6 lg:px-8  z-20 ">
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="text-2xl font-black text-primary">
                {footer.companyName}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              {footer.tagline}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-primary font-semibold text-md mb-2">
              {footer.quickLinks}
            </h3>
            <ul className="space-y-1">
              {footer.links.map((link: any) => (
                <li key={link.link}>
                  <Link
                    href={link.link}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-muted">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} {footer.companyName}
              {" - "}
              {footer.copyright}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={footer.privacy.link}
                className="text-muted-foreground hover:text-primary text-xs transition-colors"
              >
                {footer.privacy.label}
              </Link>
              <Link
                href={footer.terms.link}
                className="text-muted-foreground hover:text-primary text-xs transition-colors"
              >
                {footer.terms.label}
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            {footer.socials.map((item: any) => {
              const Icon = icons[item.platform];
              if (!Icon) return null;
              return (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={item.platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}