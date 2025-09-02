'use client';
import Form from "next/form";
import { useState } from "react";

export default function UserSearch() {

    const [val, setVal] = useState('');
    return (
        <div>
            <Form action={'/prisma-database-sqlite'}>
                <input className="text-black bg-white" name="query" type="text" value={val} onChange={(e) => setVal(e.target.value)} />
                <button className="bg-blue-400 pt-1.5 pb-1.5 pl-4 pr-4 ml-3 hover:bg-amber-400 rounded-sm " type="submit">Go</button>
            </Form>
        </div>
    );
}