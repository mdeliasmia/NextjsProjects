import React from "react";

export default function MultipleRouteLatout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Multiple Route Layout Header</h1>
            <div>{children}</div>
            <h1>Multiple Route Layout Footer</h1>
        </div>
    );
}