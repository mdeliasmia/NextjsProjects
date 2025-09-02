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

export default async function ServerDataFetch() {
    await new Promise((reslove) => setTimeout(reslove, 3000));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: user[] = await response.json();

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Server Data Fetch T-64</h1>
            <br />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
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
// http://localhost:3000/data-fetching/server-data