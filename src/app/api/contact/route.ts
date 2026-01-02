import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

// Rate limiting
const rateLimit = new Map<string, number>();

interface ContactBody {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get("x-forwarded-for") || "unknown";

        // Simple rate limiting: 1 request per minute per IP
        const now = Date.now();
        const lastRequest = rateLimit.get(ip);
        if (lastRequest && now - lastRequest < 60000) {
            return NextResponse.json(
                { error: "Too many requests. Please wait a minute." },
                { status: 429 }
            );
        }
        rateLimit.set(ip, now);

        // Parse request body
        const body: ContactBody = await request.json();
        const { name, email, phone, message } = body;

        // Server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All required fields must be filled." },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Email address is not valid." },
                { status: 400 }
            );
        }

        // Send email via EmailJS
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone || "Not provided",
            to_name: process.env.EMAILJS_TO_NAME,
            to_email: process.env.EMAILJS_TO_EMAIL,
            message: message,
        };

        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            templateParams,
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                privateKey: process.env.EMAILJS_PRIVATE_KEY!,
            }
        );

        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again later." },
            { status: 500 }
        );
    }
}
