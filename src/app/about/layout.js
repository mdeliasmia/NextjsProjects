import Link from "next/link";

export const metadata = {
    title: "About Metadata Title",
    description: "About Metadata Description",
};

export default function AboutLayout({ children }) {
    return (
        <div>
            <nav className="mt-6 mb-6">
                <ul className="flex gap-6">
                    <li>
                        <Link href="/about/mission">Mission</Link>
                    </li>
                    <li>
                        <Link href="/about/vission">Vission</Link>
                    </li>
                    <li>
                        <Link href="/about/goal">Goal</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
}