export const metadata = {
    title: "About",
};

export default function Page() {
    return (
        <div className="max-w-6xl mx-auto py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <div className="space-y-4 text-gray-600">
                <p>
                    This is a clean Next.js starter template with Tailwind CSS.
                    It provides a solid foundation for building modern web
                    applications.
                </p>
                <p>
                    Customize this template to fit your project needs. Add your
                    own components, pages, and styling to create something
                    amazing.
                </p>
            </div>
        </div>
    );
}
