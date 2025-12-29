import { LuArrowRight } from "react-icons/lu";
import { cta } from "@/lib/content";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionH2 } from "@/components/motion/MotionWrappers";

// Link Button Component for CTAs
function LinkButton({ text, href, className, showIcon = true }) {
    return (
        <a
            href={href}
            className={cn(
                "group relative rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center px-8 py-4 text-lg bg-linear-to-r from-primary to-accent text-background hover:opacity-90 shadow-xl hover:shadow-2xl",
                className
            )}
        >
            {text}
            {showIcon && (
                <LuArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            )}
        </a>
    );
}

export default function CTA({ variant = "primary" }) {
    // Normalize some legacy variant names to the new generic keys
    const variantMap = {
        consultation: "primary",
        portfolio: "secondary",
        contact: "primary",
    };

    const key = variantMap[variant] || variant;
    // Pick the configured CTA or fall back to the first available entry
    const ctaContent = cta[key] || cta.primary || Object.values(cta)[0] || {};

    // Support different heading shapes (string or object)
    const heading =
        typeof ctaContent.heading === "string"
            ? ctaContent.heading
            : ctaContent.heading?.title ||
              ctaContent.heading?.normal ||
              ctaContent.heading?.heading ||
              "";

    const buttonText =
        ctaContent.primaryButton || ctaContent.buttonText || "Get in touch";
    const buttonLink = ctaContent.link || ctaContent.primaryLink || "/contact";

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/20 p-8 sm:p-12 md:p-16"
                >
                    <div className="relative z-10 text-center space-y-6">
                        {/* Heading */}
                        <MotionH2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground"
                        >
                            {heading}
                        </MotionH2>

                        {/* CTA Button */}
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center pt-4"
                        >
                            <LinkButton
                                text={buttonText}
                                href={buttonLink}
                                className="hidden sm:flex"
                            />
                            <LinkButton
                                text={buttonText}
                                href={buttonLink}
                                showIcon={false}
                                className="sm:hidden text-sm px-6 py-3"
                            />
                        </MotionDiv>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
