import React from "react";

export default async function News({ params }: { params: Promise<{ newsid: string }> }) {
    const { newsid } = (await params);
    // console.log(newsid);

    return (
        <div className="m-10 min-h-7/12">
            <h1>Dynamic Params News Page</h1>
            <h1>News ID = {newsid}</h1>
        </div>
    );
}

//Browser URL:
//http://localhost:3000/params/123