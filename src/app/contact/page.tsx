import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import HeroContact from "@/components/sections/contact/HeroContact";

export const metadata = {
    title: "Contact | Starter Template",
    description:
        "Get in touch with us for a free consultation. We are here to transform your ideas into digital reality.",
};

export default function ContactPage() {
    return (
        <>
            <HeroContact />
            <ContactInfo />
            <ContactForm />
        </>
    );
}
