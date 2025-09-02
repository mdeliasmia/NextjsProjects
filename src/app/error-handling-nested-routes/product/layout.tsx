import React from "react";

function getError(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ErrorHandalingLayout({ children }: { children: React.ReactNode }) {
    const err = getError(2);

    if (err == 1) {
        throw new Error("Error in Layout");
    }

    return (
        <div className="min-h-7/12">
            <h1 className="m-10">This is Error Handaling Nested Layout Page</h1>
            {children}
        </div>
    );
}

// Browser URL:
// http://localhost:3000/error-handling-nested-routes/product