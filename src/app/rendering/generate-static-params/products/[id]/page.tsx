// generateStaticParams NextJS Function
export async function generateStaticParams() {

    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' }
    ];
}

export default async function GenerateStaticParamsProductDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div className="m-10 min-h-7/12">
            <h1>GenerateStaticParams Rendering Product Details Page</h1>
            <br />
            <p>Product ID = {id}</p>
            <br />
            <h1>Time = {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}

// Browser URL:
// http://localhost:3000/rendering/generate-static-params/products/123