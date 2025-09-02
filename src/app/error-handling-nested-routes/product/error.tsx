'use client';

export default function ErrorHandling({ error, reset }: { error: Error, reset: () => void }) {

    return (
        <div className="m-10 min-h-7/12">
            <h1>This was an Error !</h1>
            <h1>The Nested Routes Error Message is = {error.message}!</h1>
            <h1>The Nested Routes Error Message is = {error.name}!</h1>
            <br />
            <button className="bg-blue-400 hover:bg-amber-400 pt-2 pb-2 pl-4 pr-4 rounded-sm" onClick={reset}>ReFresh</button>
        </div>
    );
}


// Browser URL:
// http://localhost:3000/error-handling-nested-routes/123