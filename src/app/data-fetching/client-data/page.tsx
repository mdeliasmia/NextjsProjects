'use client';

import { useEffect, useState } from "react";
type user = {
    id: string,
    name: string,
    username: string,
    email: string,
    address: string,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export default function ClientData() {
    const [data, setData] = useState<user[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Something wrong with DataFetching');
                }
                const userData = await response.json();
                setData(userData);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }
        getUsers();
    }, []);

    if (error) {
        return (
            <p>{error}</p>
        );
    }
    if (loading) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <div>
            <h1>Client Data Fetching</h1>
            <br />
            <ul>
                {data.map((user, index) => (
                    <li key={index}>
                        <h1>User ID = {user.id}</h1>
                        <h1>UserName = {user.name}</h1>
                        <h1>UserEmail = {user.email}</h1>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Browser URL:
// http://localhost:3000/data-fetching/client-data