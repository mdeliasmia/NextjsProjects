
import Link from "next/link";
import React from "react";

export default function Link1() {
    const linkId = 1;

    return (
        <div>
            <h1>This is Link-1 Page</h1>
            <div className="m-6">
                <ul className="flex">
                    <li className="mr-6 bg-amber-100 text-black pl-4 pr-4 rounded-md ">
                        <Link href={`/link1/${linkId}`}>Link-ID-{linkId}</Link>
                    </li>
                    <li className="mr-6 bg-amber-100 text-black pl-4 pr-4 rounded-md ">
                        <Link href="/link1/2">Link-ID-2</Link>
                    </li>
                    <li className="mr-6 bg-amber-100 text-black pl-4 pr-4 rounded-md ">
                        <Link href="/link1/3">Link-ID-3</Link>
                    </li>
                    <li className="mr-6 bg-amber-100 text-black pl-4 pr-4 rounded-md ">
                        <Link href="/link1/4" replace>Back Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

//Browser URL:
// http://localhost:3000/link1