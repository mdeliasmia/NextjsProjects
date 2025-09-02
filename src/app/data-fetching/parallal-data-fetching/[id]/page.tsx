type post = {
    userId: string,
    id: string,
    title: string,
    body: string
}
type album = {
    userId: string,
    id: string,
    title: string
}
async function getUserPosts(userId: string) {
    await new Promise((resolv) => setTimeout(resolv, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const posts: post[] = await response.json();
    return posts;
}

async function getUserAlbums(userId: string) {
    await new Promise((resolv) => setTimeout(resolv, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);

    const albums: album[] = await response.json();
    return albums;
}

export default async function ParallalData({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const allPosts = getUserPosts(id);
    const allAlbums = getUserAlbums(id);
    const [posts, albums] = await Promise.all([allPosts, allAlbums]);

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Parallal Data</h1>
            <br />
            <div className="flex w-full gap-2">
                <div className="flex flex-wrap gap-2 w-full">
                    <h1>Post</h1>
                    {posts.map(post =>
                        <div key={post.id} className="p-1 w-full  h-[200px] bg-white text-gray-900 rounded-lg shadow-sm">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 w-full">
                    <h1>Albam</h1>
                    {albums.map(album =>
                        <div key={album.id} className="w-full p-1 h-[200px] bg-white text-gray-900 rounded-lg shadow-sm">
                            <h3>{album.title}</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 