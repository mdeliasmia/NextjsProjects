'use client';
import React, { useEffect, useState } from "react";

export default function ClientPage() {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue('Hello NextJS Routing');
    }, []);
    // console.log('Client site Rendering', value);

    return (
        <div className="m-10 min-h-7/12">
            <h1>This Client Rendering Page T-51</h1>
            <p>The Value = {value}</p>
        </div>
    );
}