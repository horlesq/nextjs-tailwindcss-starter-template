import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-4 text-center flex-1 flex items-center justify-center">
            <div className="space-y-6">
                <h1 className="text-8xl font-black text-foreground">404</h1>
                <h2 className="text-2xl font-semibold text-muted-foreground">
                    Page not found
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                    The page you are looking for does not exist or has been
                    moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-accent hover:opacity-90 text-background rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
}
