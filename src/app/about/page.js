export const metadata = {
    title: "About",
};

export default function Page() {
    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <div className="prose prose-lg">
                <p className="text-gray-600 mb-4">
                    This is a clean Next.js starter template with Tailwind CSS.
                    It provides a solid foundation for building modern web
                    applications.
                </p>
                <p className="text-gray-600">
                    Customize this template to fit your project needs. Add your
                    own components, pages, and styling to create something
                    amazing.
                </p>
            </div>
        </div>
    );
}
