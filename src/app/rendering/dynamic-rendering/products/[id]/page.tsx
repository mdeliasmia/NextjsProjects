export default async function DynamicProductDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div className="m-10 min-h-7/12">
            <h1>Dynamic Rendering Product Details Page</h1>
            <br />
            <p>Product ID = {id}</p>
            <br />
            <h1>Time = {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}

// Browser URL:
// http://localhost:3000/rendering/dynamic-rendering/products/123