export default async function Lecture({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    console.log(slug);
    if (slug?.length == 1) {
        return (
            <div>Lecture {slug[slug?.length - 1]}</div>
        );
    }
    if (slug?.length == 2) {
        return (
            <div>Lecture {slug[slug?.length - 1]}</div>
        );
    }
    if (slug?.length == 3) {
        return (
            <div>Lecture {slug[slug?.length - 1]} 3=3</div>
        );
    }

    return (
        <div>
            <h1>This is Lecture Page</h1>
        </div>
    );
}

//Browser URL:
// http://localhost:3000/lectures/1