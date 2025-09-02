import Link from "next/link";
import { Metadata } from "next";
import React from "react";

type Props = { params: Promise<{ nid: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const nid = (await params).nid;
    return {
        title: `Programmatically Navigate ID = ${nid}`,
        description: `Programmatically Navigate Description And ID = ${nid}`,
    };
}

export default async function DynamicNavigate({ params }: Props) {
    const nid = (await params).nid;

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Dynamic Navigate Page with ID</h1>
            <h2>The Client ID = {nid}</h2>
            <br />
            <Link className={`mt-6 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500 }`} href={`/checkout`}>
                Checkout
            </Link>
        </div>
    );
}

//Browser URL:
//http://localhost:3000/navigate-programmatically/111