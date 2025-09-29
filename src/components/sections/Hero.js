import { getPackageVersions } from "@/lib/versions";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const versions = getPackageVersions();

    return (
        <section
            className="text-center space-y-8 py-16"
            aria-labelledby="hero-heading"
        >
            <div className="space-y-4">
                <h1
                    id="hero-heading"
                    className="text-5xl font-bold text-gray-900"
                >
                    Next.js + Tailwind CSS Starter
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    A clean, minimal starter template for building modern web
                    applications with Next.js and Tailwind CSS.
                </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                    Get Started
                </Link>

                <Link
                    href="https://github.com/horlesq/nextjs-tailwindcss-starter-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                    <Image
                        src="/icons/github.svg"
                        alt="GitHub"
                        width={24}
                        height={24}
                    />
                    GitHub
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-24">
                <div className="text-center space-y-3">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/icons/nextjs.svg"
                            alt="Next.js"
                            width={48}
                            height={48}
                        />
                    </div>
                    <h3 className="font-semibold text-gray-900">Next.js</h3>
                    <p className="text-gray-600">Version {versions.next}</p>
                </div>

                <div className="text-center space-y-3">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/icons/react.svg"
                            alt="React"
                            width={48}
                            height={48}
                        />
                    </div>
                    <h3 className="font-semibold text-gray-900">React</h3>
                    <p className="text-gray-600">Version {versions.react}</p>
                </div>

                <div className="text-center space-y-3">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/icons/tailwindcss.svg"
                            alt="Tailwind CSS"
                            width={48}
                            height={48}
                        />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                        Tailwind CSS
                    </h3>
                    <p className="text-gray-600">
                        Version {versions.tailwindcss}
                    </p>
                </div>
            </div>
        </section>
    );
}
