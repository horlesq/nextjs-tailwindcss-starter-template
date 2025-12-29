import SectionHeader from "@/components/SectionHeader";
import { process } from "@/lib/content";

export default function Process() {
    return (
        <section className="py-12 lg:py-16 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    title={process.header}
                    description={process.description}
                    className="mb-16 md:mb-8"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {process.steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-card border-2 border-muted/30 rounded-xl"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
