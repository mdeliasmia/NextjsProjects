export default async function Comments({ commentsPromise }) {
    const comments = await commentsPromise;

    return (
        <div className="mt-10">
            <h1 className="text-amber-700 font-extrabold">Comments:</h1>
            <hr className="w-[92px] text-amber-700 font-extrabold mb-4" />
            <ul>
                {comments.map((comment) => (
                    <li className="mb-3" key={comment.id}>
                        <h1 className="text-green-700">Name : {comment.name}</h1>
                        <h2 className="text-yellow-300">Email : {comment.email}</h2>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}