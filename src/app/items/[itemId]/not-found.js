import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-4xl mx-auto py-16 text-center">
            <div className="space-y-6">
                <h1 className="text-6xl font-bold text-gray-900">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700">
                    Page Not Found
                </h2>
                <p className="text-gray-600">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
