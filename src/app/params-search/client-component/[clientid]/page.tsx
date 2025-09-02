'use client';
import { use } from "react";

export default function ClientComponent({ params, searchParams }: {
    params: Promise<{ clientid: string }>,
    searchParams: Promise<{ cat: string, type: string }>
}) {
    const { clientid } = use(params);
    const { cat, type } = use(searchParams);
    // console.log(use);

    return (
        <div className="m-10 min-h-7/12">
            <h1>Dynamic Client Component Page</h1>
            <h1>Client Component  ID = {clientid}</h1>
            <h1>Client Component Cat = {cat}</h1>
            <h1>Client Component Type = {type}</h1>
        </div>
    );
}

//Browsing URL:
//For CAT:-
//http://localhost:3000/params-search/client-component/132?cat=abc
//For Type:-
//http://localhost:3000/params-search/client-component/132?cat=abc
//http://localhost:3000/params-search/client-component/132?type=hello

//http://localhost:3000/params-search/client-component/132?cat=abc&&type=hello