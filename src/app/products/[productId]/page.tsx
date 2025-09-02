export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {

    const productId = (await params).productId;
    return (
        <div className="m-10 min-h-7/12">
            <h1>Product Details Page</h1>
            <h1>Product ID =  {productId}</h1>
        </div>
    );
}


//Browser URL:
//http://localhost:3000/products/123