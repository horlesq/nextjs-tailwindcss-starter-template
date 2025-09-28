import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center space-y-6 py-16">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">
                    Page Not Found
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    Go Home
                </Link>
            </div>

            <div className="mt-8 text-sm text-gray-500">
                <p>Error 404 - Page not found</p>
            </div>
        </main>
    );
}
