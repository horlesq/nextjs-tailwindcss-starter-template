import { faq } from "@/lib/content";
import SectionHeader from "../SectionHeader";
import { FAQAccordion } from "../FAQAccordion";

export default function FAQ() {
    return (
        <section className="py-12 lg:py-16 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    title={faq.header}
                    description={faq.description}
                    className="mb-8"
                />

                <FAQAccordion items={faq.items} />
            </div>
        </section>
    );
}
