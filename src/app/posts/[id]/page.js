import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComment from "@/lib/getPostComment";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
    const id = params;
    const post = await getPost(id);
    return {
        title: post.title,
        description: post.body,
    }
}

export default async function PostPage({ params }) {
    const id = params;
    // const post = await getPost(id);
    // console.log(post);
    const postPromise = await getPost(id);
    const commentsPromise = await getPostComment(id);
    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
    // console.log(comments);
    const post = await postPromise;
    return (
        <div className="mt-6">
            <h1 className="text-blue-500">{post.title}</h1>
            <p className="mt-3 mb-3">{post.body}</p>
            <hr />
            {/* <div className="mt-10">
                <h1>Comments</h1>
                <ul>
                    {comments.map((comment) => (
                        <li className="mb-2" key={comment.id}>
                            {comment.body}
                        </li>
                    ))}
                </ul>
            </div> */}
            <Suspense fallback="<h1>Loading comments...</h1>">
                <Comments commentsPromise={commentsPromise} />
            </Suspense>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}
