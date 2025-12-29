import { MotionDiv } from "@/components/motion/MotionWrappers";
import {
    RiInstagramLine,
    RiFacebookFill,
    RiLinkedinFill,
    RiTiktokFill,
} from "react-icons/ri";
import { LuMail, LuPhone } from "react-icons/lu";
import { contactInfo } from "@/lib/content";
import { IconType } from "react-icons";

export default function ContactInfo() {
    const primaryIconMap: Record<string, IconType> = {
        email: LuMail,
        phone: LuPhone,
    };

    const socialIconMap: Record<string, IconType> = {
        instagram: RiInstagramLine,
        facebook: RiFacebookFill,
        linkedin: RiLinkedinFill,
        tiktok: RiTiktokFill,
    };

    return (
        <section
            id="contact-info"
            className="py-12 lg:py-16 bg-background px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                {/* Text Content */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-black mb-4 text-foreground">
                        {contactInfo.header}
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                        {contactInfo.description}
                    </p>
                </MotionDiv>

                {/* Contact Methods */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full space-y-6"
                >
                    {/* Email and Phone cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contactInfo.primary.map((item, idx) => {
                            const Icon = primaryIconMap[item.icon];
                            return (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="flex items-center gap-4 p-6 bg-card border-2 border-muted/30 rounded-xl hover:border-primary/50 transition-colors duration-200"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        {Icon && (
                                            <Icon className="w-6 h-6 text-primary" />
                                        )}
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <h3 className="font-bold text-foreground text-sm">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-muted-foreground truncate">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {contactInfo.socials.map((social, idx) => {
                            const Icon = socialIconMap[social.platform];
                            return (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit our ${social.platform} page`}
                                    className="flex items-center justify-center w-12 h-12 bg-card border-2 border-muted/30 rounded-xl hover:border-primary/50 transition-colors duration-200 group"
                                >
                                    {Icon && (
                                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
