'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


const navigations = [
    { title: 'About Active Link', href: '/link-active/ActiveLinkAbout' },
    { title: 'Products Active Link', href: '/link-active/ActiveLinkProducts' },
    { title: 'Blog Active Link', href: '/link-active/ActiveLinkBlog' },
    { title: 'Contact Active Link', href: '/link-active/ActiveLinkContact' },
]

export default function ActiveLinkLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body>
                <div className="p-5 bg-amber-950" >
                    {navigations.map((nav, index) => {
                        const isActive = pathname === nav.href || (pathname.startsWith(nav.href) && nav.href !== '/');
                        return (
                            <Link className={`mr-3 pt-3 pb-3 pl-2 pr-2 rounded-md hover:bg-amber-500  ${isActive ? "bg-amber-500" : 'bg-blue-400'}`} href={nav.href} key={index}>
                                {nav.title}
                            </Link>
                        );
                    })}
                </div>
                {children}
            </body>
        </html>
    );
}

//Browser URL:
// http://localhost:3000/link-active
