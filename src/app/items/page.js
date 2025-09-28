export const metadata = {
    title: "Items",
};

export default function Page() {
    // Sample static data for demonstration
    const items = [
        { id: 1, name: "Sample Item 1", description: "Description for item 1" },
        { id: 2, name: "Sample Item 2", description: "Description for item 2" },
        { id: 3, name: "Sample Item 3", description: "Description for item 3" },
    ];

    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Items</h1>
                <p className="text-gray-600">
                    This is a sample items page. Replace with your own content
                    and data fetching logic.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-6"
                    >
                        <h3 className="font-semibold text-gray-900 mb-2">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <a
                            href={`/items/${item.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                            View Details →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
