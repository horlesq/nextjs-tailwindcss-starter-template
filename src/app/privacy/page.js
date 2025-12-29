export const metadata = {
    title: "Privacy Policy",
    description:
        "Learn how we collect, use and protect your personal data when using our template.",
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

export default function PrivacyPolicyPage() {
    const lastUpdated = "December 2025";

    return (
        <main className="bg-background px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-4xl mx-auto space-y-10">
                <header className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                        Privacy Policy
                    </p>
                    <h1 className="text-3xl font-black text-foreground">
                        How we protect your data
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        This page explains what data we collect, why we use it
                        and what rights you have. This policy is written for
                        visitors and potential clients of our Starter Brand.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Last updated: {lastUpdated}
                    </p>
                </header>

                <Section title="1. Who we are and how you can contact us">
                    <p>
                        Data Controller: Starter Brand. For any question related
                        to privacy, you can write to us at{" "}
                        <a
                            className="text-primary underline"
                            href="mailto:contact@yourdomain.com"
                        >
                            contact@yourdomain.com
                        </a>
                        .
                    </p>
                </Section>

                <Section title="2. What data we collect">
                    <List
                        items={[
                            "Data sent via the contact form: name, email, phone (optional) and your message.",
                            "The IP address is used temporarily for rate limiting; we do not store it in the database.",
                        ]}
                    />
                    <p>
                        We do not create user accounts and do not collect
                        passwords, payment data or other special categories of
                        data.
                    </p>
                </Section>

                <Section title="3. Why we use the data and legal basis">
                    <List
                        items={[
                            "Response to requests sent via the contact form – legitimate interest and/or consent.",
                            "Security and abuse limitation (rate limiting on IP) – legitimate interest.",
                        ]}
                    />
                </Section>

                <Section title="4. How we process and where the data goes">
                    <List
                        items={[
                            "Form messages are sent via email service to our address. We do not store messages in our own database.",
                            "Email service acts as a processor.",
                            "The site is hosted on modern infrastructure; there may be short technical logs for security and performance.",
                            "Messages arrive in our email inbox and can be kept there as long as needed for communication or according to legal obligations.",
                        ]}
                    />
                </Section>

                <Section title="5. Data retention">
                    <List
                        items={[
                            "The IP used for rate limiting is kept only temporarily.",
                            "Messages received on email are kept for the duration necessary to handle the request.",
                            "You can request the deletion of your messages at any time.",
                        ]}
                    />
                </Section>

                <Section title="6. Cookies and analytics">
                    <List
                        items={[
                            "Currently we do not use tracking cookies and do not run Google Analytics by default.",
                            "If enabled, we will provide an explicit-consent banner and opt-out options.",
                        ]}
                    />
                </Section>

                <Section title="7. Security">
                    <List
                        items={[
                            "We transmit data via HTTPS connections.",
                            "We validate form data and limit requests to prevent abuse.",
                        ]}
                    />
                </Section>

                <Section title="8. Your rights (GDPR)">
                    <p>
                        You can exercise the following rights, within the limits
                        of the law:
                    </p>
                    <List
                        items={[
                            "access to your data and obtaining a copy;",
                            "rectification and update;",
                            'deletion ("the right to be forgotten"), when applicable;',
                            "restriction of processing;",
                            "portability;",
                            "opposition to processing based on legitimate interest;",
                            "withdraw consent.",
                        ]}
                    />
                </Section>

                <Section title="9. Minors">
                    <p>
                        The site is intended for persons over 16 years old. We
                        do not intentionally collect data from minors.
                    </p>
                </Section>

                <Section title="10. Policy changes">
                    <p>
                        We may update this policy to reflect changes in
                        functionality or legal requirements.
                    </p>
                </Section>

                <Section title="11. Contact">
                    <p>
                        For any request related to your personal data, write to
                        us at{" "}
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
