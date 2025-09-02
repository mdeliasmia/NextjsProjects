import { Suspense } from "react";
import Author from "./Author";

type blog = {
    userId: string,
    id: string,
    title: string,
    body: string
}

export default async function SequentialDataFetching() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogs: blog[] = await response.json();
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Sequential Data Fetching Page T-66</h1>
            <br />
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <h1>blog ID = {blog.id}</h1>
                        <h1>blogName = {blog.title}</h1>
                        <h1>blogEmail = {blog.body}</h1>
                        <div>
                            <Suspense fallback={`Author Loading...`}>
                                <Author userId={blog.userId} />
                            </Suspense>
                        </div>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}