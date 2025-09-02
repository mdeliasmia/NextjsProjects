import React from "react";

export default async function Search({ params, searchParams }: {
    params: Promise<{ searchid: string }>,
    searchParams: Promise<{ cat: string, type: string }>
}) {
    const { searchid } = (await params);
    // console.log(searchid);
    // const  cat  = (await searchParams);//here cat obj
    // console.log(cat);
    const { cat, type } = (await searchParams);

    return (
        <div className="m-10 min-h-7/12">
            <h1>Dynamic Search Params Page</h1>
            <h1>News ID = {searchid}</h1>
            <h1>Search Params Cat = {cat}</h1>
            <h1>Search Params Type = {type}</h1>
        </div>
    );
}

//Browsing URL:
//For CAT:-
//http://localhost:3000/params-search/111?cat=abc
//For Type:-
//http://localhost:3000/params-search/111?cat=abc
//http://localhost:3000/params-search/111?cat=abc&&type=hello
//http://localhost:3000/params-search/111?type=hello