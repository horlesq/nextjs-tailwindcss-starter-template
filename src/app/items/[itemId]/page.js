import Link from "next/link";

export default function Page({ params }) {
    const itemId = params.itemId;

    const item = {
        id: itemId,
        name: `Sample Item ${itemId}`,
        description: `This is a description for item ${itemId}.`,
    };

    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className="mb-6">
                <Link
                    href="/items"
                    className="text-blue-600 hover:text-blue-700"
                >
                    ← Back to Items
                </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {item.name}
                </h1>
                <p className="text-gray-600">{item.description}</p>
            </div>
        </div>
    );
}