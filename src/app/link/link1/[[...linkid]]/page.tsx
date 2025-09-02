export default async function LinkWithID({ params }: { params: Promise<{ linkid: string[] }> }) {
    const { linkid } = await params;

    if (!linkid) {
        return null;
    }
    console.log(linkid);

    return (
        <div>
            <h1>This is Link-{linkid} Page.</h1>
            <h1>Link-ID = {linkid}</h1>
        </div>
    );
}


//Browser URL:
// http://localhost:3000/link/link1/1