import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 z-10">
            <span className="text-xl font-bold text-gray-900">YourLogo</span>
        </Link>
    );
}
