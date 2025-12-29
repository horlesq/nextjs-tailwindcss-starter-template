"use client";

export default function Error({ error, reset }) {
    return (
        <div className="max-w-5xl mx-auto py-20 px-4 text-center flex-1 flex items-center justify-center">
            <div className="space-y-6">
                <h1 className="text-6xl font-black text-foreground">Error</h1>
                <h2 className="text-xl font-semibold text-muted-foreground">
                    Something went wrong
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                    {error.message || "An unexpected error occurred."}
                </p>
                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-accent hover:opacity-90 text-background rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
