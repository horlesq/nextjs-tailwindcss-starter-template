// Generic site content — replace values for each new project

// Navigation Menu Content
export const nav = {
    items: [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
    ],
};

// Footer Content
export const footer = {
    companyName: "Your Company",
    tagline:
        "We help people and organizations achieve their goals with thoughtful solutions.",
    quickLinks: "Quick Links",
    links: [
        { link: "/", name: "Home" },
        { link: "/services", name: "Services" },
        { link: "/contact", name: "Contact" },
    ],
    copyright: "All rights reserved.",
    privacy: {
        label: "Privacy Policy",
        link: "/privacy",
    },
    terms: {
        label: "Terms & Conditions",
        link: "/terms",
    },
    socials: [
        { platform: "facebook", url: "https://www.facebook.com/example" },
        { platform: "instagram", url: "https://www.instagram.com/example" },
        { platform: "linkedin", url: "https://www.linkedin.com/company/example" },
    ],
};

// Hero Section Content
export const hero = {
    heading: {
        gradient: "Welcome to",
        normal: "Our Site",
    },
    description:
        "Simple, clear information to help visitors understand what you offer and how to get in touch.",
    cta: {
        primary: "Get in Touch",
        primaryLink: "/contact",
        secondary: "Learn More",
        secondaryLink: "/about",
    },
};

// Call to Action Section Content
export const cta = {
    primary: {
        heading: "Ready to get started?",
        primaryButton: "Contact Us",
        type: "link",
        link: "/contact",
    },
    secondary: {
        heading: "See what we do",
        primaryButton: "Our Services",
        type: "link",
        link: "/services",
    },
};

// Services Section Content (generic)
export const heroServices = {
    heading: {
        normal: "Our",
        gradient: "Services",
    },
    description: "A concise overview of key services or offerings.",
};

// Process Section Content (generic steps)
export const process = {
    header: "How We Work",
    description: "A clear, repeatable approach we use to deliver results.",
    steps: [
        {
            title: "Discover",
            description: "We discuss your needs and collect relevant information.",
        },
        {
            title: "Plan",
            description: "Define objectives, timeline, and deliverables.",
        },
        {
            title: "Deliver",
            description: "Execute the work and share progress along the way.",
        },
        {
            title: "Support",
            description: "Provide follow-up and assistance after delivery.",
        },
    ],
};

// Contact Hero Section Content
export const heroContact = {
    heading: {
        normal: "Get in touch",
        gradient: "With Us",
    },
    description: "Reach out to discuss your needs or ask questions.",
    cta: "Contact us",
};

// Contact Info Section Content
export const contactInfo = {
    header: "Contact Information",
    description: "You can reach us via email, phone, or social channels.",
    primary: [
        {
            icon: "email",
            title: "Email",
            value: "contact@example.com",
            link: "mailto:contact@example.com",
        },
        {
            icon: "phone",
            title: "Phone",
            value: "+1 000 000 0000",
            link: "tel:+10000000000",
        },
    ],
    socials: [
        {
            platform: "instagram",
            name: "Instagram",
            url: "https://www.instagram.com/example",
        },
        {
            platform: "facebook",
            name: "Facebook",
            url: "https://www.facebook.com/example",
        },
        {
            platform: "linkedin",
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/example",
        },
    ],
};

// Contact Form Section Content
export const contactForm = {
    header: {
        title: "Send a message",
        description:
            "Use the form to tell us about your inquiry and we'll respond as soon as possible.",
    },
    alerts: {
        success: "Message sent successfully!",
        defaultError: "An error occurred. Please try again later.",
    },
    fields: {
        name: {
            label: "Name",
            placeholder: "Your name",
        },
        email: {
            label: "Email",
            placeholder: "you@example.com",
        },
        phone: {
            label: "Phone",
            placeholder: "+1 000 000 0000",
        },
        message: {
            label: "Message",
            placeholder: "Write your message here...",
        },
    },
    button: {
        default: "Send Message",
        loading: "Sending...",
    },
};