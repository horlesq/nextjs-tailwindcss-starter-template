import { MotionH1, MotionP } from "@/components/motion/MotionWrappers";
import { heroContact } from "@/lib/content";

export default function HeroContact() {
    return (
        <section className="relative flex items-center justify-center overflow-hidden bg-background md:min-h-0 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 w-full max-w-5xl mx-auto pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-12">
                <div className="text-center space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                        <MotionH1
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
                        >
                            <span className="text-foreground">
                                {heroContact.heading.normal}
                            </span>
                            <br />
                            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl">
                                {heroContact.heading.gradient}
                            </span>
                        </MotionH1>
                        <MotionP
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
                        >
                            {heroContact.description}
                        </MotionP>
                    </div>
                </div>
            </div>
        </section>
    );
}
