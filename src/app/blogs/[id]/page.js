import { notFound } from "next/navigation";
import React from "react";

export default function BlogPage({ params }) {
    const { id } = params;
    if (id === '3') {
        notFound();
    }
    return (
        <div className="mt-6">The Blog Page ID = {id}</div>
    );
}

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }];
}