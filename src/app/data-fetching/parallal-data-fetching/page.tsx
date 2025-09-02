import Link from "next/link";

type post = {
    userId: string,
    id: string,
    title: string,
    body: string
}

export default async function ParallalDataFetching() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: post[] = await response.json();
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Sequential Data Fetching Page T-66</h1>
            <br />
            <ul className="grid grid-cols-2 gap-4">
                {posts.map((post) => (

                    <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`} key={post.id}>
                        <Link href={`http://localhost:3000/data-fetching/parallal-data-fetching/${post.userId}`}>
                            <div>
                                <h1>post ID = {post.id}</h1>
                                <h1>postName = {post.title}</h1>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    );
}
