export const metadata = {
    title: "Terms & Conditions",
    description:
        "Rules for using our starter template and initial collaboration conditions.",
};

const Section = ({ title, children }) => (
    <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <div className="space-y-3 text-sm leading-6 text-muted-foreground">
            {children}
        </div>
    </section>
);

const List = ({ items }) => (
    <ul className="list-disc list-inside space-y-2">
        {items.map((item) => (
            <li key={item} className="text-sm leading-6 text-muted-foreground">
                {item}
            </li>
        ))}
    </ul>
);

export default function TermsOfServicePage() {
    const lastUpdated = "December 2025";

    return (
        <main className="bg-background px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-4xl mx-auto space-y-10">
                <header className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                        Terms & Conditions
                    </p>
                    <h1 className="text-3xl font-black text-foreground">
                        Website usage rules
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Read carefully before using the site or contacting us.
                        Accessing the site implies acceptance of these terms.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Last updated: {lastUpdated}
                    </p>
                </header>

                <Section title="1. Scope of the site">
                    <p>
                        This site is a portfolio and a contact channel for
                        services offered by our Starter Brand. We do not
                        directly sell products or services online through this
                        site and do not offer user accounts.
                    </p>
                </Section>

                <Section title="2. Acceptance of terms">
                    <p>
                        By accessing or using the site, you confirm that you
                        have read and accept these Terms and Conditions and the
                        Privacy Policy. If you do not agree, please do not use
                        the site.
                    </p>
                </Section>

                <Section title="3. Eligibility and fair use">
                    <List
                        items={[
                            "The site is intended for people over 16 years old.",
                            "Abusive use (e.g., attacks, unauthorized access attempts, spam) is not allowed.",
                            "You can use the contact form only for real requests related to our services.",
                        ]}
                    />
                </Section>

                <Section title="4. Intellectual property">
                    <p>
                        All materials on the site (texts, images, logos, design,
                        code) are property of Starter Brand or are used with
                        permission. Do not copy, distribute or reuse without
                        prior written consent.
                    </p>
                </Section>

                <Section title="5. Submitted content">
                    <List
                        items={[
                            "You are responsible for the accuracy of the data sent through the contact form.",
                            "Do not send sensitive information (e.g., medical, financial) via the form.",
                        ]}
                    />
                </Section>

                <Section title="6. Disclaimer">
                    <p>
                        The site is provided \"as is\". We do not guarantee it
                        will be available at all times or without errors.
                    </p>
                </Section>

                <Section title="7. Limitation of liability">
                    <p>
                        Starter Brand is not liable for indirect, incidental or
                        consequential damages resulting from the use or
                        inability to use the site.
                    </p>
                </Section>

                <Section title="8. Third party links">
                    <p>
                        The site may contain links to other sites. We do not
                        control and are not responsible for their content or
                        practices.
                    </p>
                </Section>

                <Section title="9. Privacy">
                    <p>
                        Processing of personal data is done according to the
                        Privacy policy.
                    </p>
                </Section>

                <Section title="10. Modifications">
                    <p>
                        We may update these terms at any time. The version
                        published on the site is the one applicable.
                    </p>
                </Section>

                <Section title="11. Applicable law">
                    <p>
                        These terms are governed by the law of our jurisdiction.
                    </p>
                </Section>

                <Section title="12. Contact">
                    <p>
                        For questions related to terms, write to us at{" "}
                        <a
                            className="text-primary underline"
                            href="mailto:contact@yourdomain.com"
                        >
                            contact@yourdomain.com
                        </a>
                        .
                    </p>
                </Section>
            </div>
        </main>
    );
}
