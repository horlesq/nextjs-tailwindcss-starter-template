"use client";

import { useState } from "react";
import { MotionForm } from "@/components/motion/MotionWrappers";
import { LuSend } from "react-icons/lu";
import SectionHeader from "@/components/SectionHeader";
import { contactForm } from "@/lib/content";
import Toast from "@/components/Toast";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showAlert = (type: string, message: string) => {
        setAlert({ show: true, type, message });
        setTimeout(() => {
            setAlert({ show: false, type: "", message: "" });
        }, 5000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || contactForm.alerts.defaultError);
            }

            setFormData({ name: "", email: "", phone: "", message: "" });
            showAlert(
                "success",
                data.message ||
                    contactForm.alerts.success ||
                    "Mesajul a fost trimis cu succes!"
            );
        } catch (error: any) {
            showAlert("error", error.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-12 lg:py-16 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <SectionHeader
                    title={contactForm.header.title}
                    description={contactForm.header.description}
                    className="mb-8"
                />

                <Toast alert={alert} />

                <MotionForm
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    {/* Name Field */}
                    <div className="p-5 bg-card border-2 border-muted/30 rounded-lg hover:border-primary/50 transition-colors duration-200">
                        <div className="flex items-center gap-3">
                            <label
                                htmlFor="name"
                                className="font-semibold text-foreground text-sm shrink-0 cursor-pointer"
                            >
                                {contactForm.fields.name.label}{" "}
                                <span className="text-primary">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="flex-1 bg-transparent text-md text-foreground placeholder:text-muted-foreground focus:outline-none"
                                placeholder={
                                    contactForm.fields.name.placeholder
                                }
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="p-5 bg-card border-2 border-muted/30 rounded-lg hover:border-primary/50 transition-colors duration-200">
                        <div className="flex items-center gap-3">
                            <label
                                htmlFor="email"
                                className="font-semibold text-foreground text-sm shrink-0 cursor-pointer"
                            >
                                {contactForm.fields.email.label}{" "}
                                <span className="text-primary">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="flex-1 bg-transparent text-md text-foreground placeholder:text-muted-foreground focus:outline-none"
                                placeholder={
                                    contactForm.fields.email.placeholder
                                }
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Phone Field */}
                    <div className="p-5 bg-card border-2 border-muted/30 rounded-lg hover:border-primary/50 transition-colors duration-200">
                        <div className="flex items-center gap-3">
                            <label
                                htmlFor="phone"
                                className="font-semibold text-foreground text-sm shrink-0 cursor-pointer"
                            >
                                {contactForm.fields.phone.label}
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className="flex-1 bg-transparent text-md text-foreground placeholder:text-muted-foreground focus:outline-none"
                                placeholder={
                                    contactForm.fields.phone.placeholder
                                }
                                autoComplete="tel"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="p-5 bg-card border-2 border-muted/30 rounded-lg hover:border-primary/50 transition-colors duration-200">
                        <div className="flex items-start gap-3">
                            <label
                                htmlFor="message"
                                className="font-semibold text-foreground text-sm shrink-0 pt-1 cursor-pointer"
                            >
                                {contactForm.fields.message.label}{" "}
                                <span className="text-primary">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="flex-1 bg-transparent text-md text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
                                placeholder={
                                    contactForm.fields.message.placeholder
                                }
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-6 py-4 bg-linear-to-r from-primary to-accent text-background rounded-lg font-bold text-lg shadow-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                {contactForm.button.loading}
                            </>
                        ) : (
                            <>
                                {contactForm.button.default}
                                <LuSend className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </MotionForm>
            </div>
        </section>
    );
}
