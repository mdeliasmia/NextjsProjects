export default async function getAllPosts() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',
        {
            next: {
                revalidate: 10,
            }
        }
    );
    if (!result.ok) {
        throw new Error("There was an error fetching all-posts");
    }

    return result.json();
}