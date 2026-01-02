import CTA from "@/components/sections/CTA";
import HeroServices from "@/components/sections/services/HeroServices";
import Process from "@/components/sections/services/Process";

export default function ServicesPage() {
    return (
        <>
            <HeroServices />
            <Process />
            <CTA variant="portfolio" />
        </>
    );
}
