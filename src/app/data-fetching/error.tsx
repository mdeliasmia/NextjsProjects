'use client';

export default function Error({ error }: { error: Error }) {
    return (
        <div>
            <h1>Custom Error = {error.message}</h1>
        </div>
    );
}