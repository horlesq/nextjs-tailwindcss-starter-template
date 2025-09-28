import Spinner from "@/components/Spinner";

export default function Loading() {
    return (
        <div className="grid items-center justify-center min-h-[400px]">
            <Spinner />
            <p className="text-xl text-gray-600 mt-4">Loading content...</p>
        </div>
    );
}
