import { LuArrowRight } from "react-icons/lu";
import { MotionDiv } from "@/components/motion/MotionWrappers";

import { hero } from "@/lib/content";

export default function HeroSection() {
    return (
        <section className="relative flex items-center justify-center overflow-hidden bg-background md:min-h-0">
            <div className="relative z-10 w-full max-w-5xl mx-auto pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-12">
                <div className="text-center space-y-6 sm:space-y-8">
                    {/* Main Heading */}
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-3 sm:space-y-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                            <span className="bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                {hero.heading.gradient}
                            </span>
                            <br />
                            <span className="text-foreground">
                                {hero.heading.normal}
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                            {hero.description}
                        </p>
                    </MotionDiv>

                    {/* CTA Buttons */}
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                    >
                        <a
                            href={hero.cta.primaryLink}
                            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-primary to-accent hover:opacity-90 text-background rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {hero.cta.primary}
                            <LuArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={hero.cta.secondaryLink}
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-background/80 hover:bg-background text-foreground rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border-2 border-primary/30 hover:border-accent/50"
                        >
                            {hero.cta.secondary}
                        </a>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
