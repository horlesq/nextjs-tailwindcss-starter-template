import { MotionDiv } from "@/components/motion/MotionWrappers";

type Alignment = "center" | "left" | "center-lg-left" | "center-lg-right";

interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
    align?: Alignment;
}

export default function SectionHeader({
    title,
    description,
    className = "",
    align = "center",
}: SectionHeaderProps) {
    const alignmentClasses: Record<Alignment, string> = {
        center: "text-center mx-auto",
        left: "text-left",
        "center-lg-left": "text-center lg:text-left mx-auto lg:mx-0",
        "center-lg-right":
            "text-center lg:text-right mx-auto lg:ml-auto lg:mr-0",
    };

    const textAlign = alignmentClasses[align] || alignmentClasses.center;

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${textAlign} ${className}`}
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
                <span className="bg-foreground bg-clip-text text-transparent">
                    {title}
                </span>
            </h2>
            {description && (
                <p className="text-sm sm:text-base text-muted-foreground max-w-3xl lg:max-w-none">
                    {description}
                </p>
            )}
        </MotionDiv>
    );
}
