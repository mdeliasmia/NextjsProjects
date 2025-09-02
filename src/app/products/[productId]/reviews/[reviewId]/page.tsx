import { notFound } from "next/navigation";

export default async function ReviewDetails({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params;
    if (reviewId > "50") {
        notFound();
    }
    return (
        <div className="m-10 min-h-7/12">
            <h1>Product Review Page</h1>
            <p>Product ID:{productId} Review ID:{reviewId}</p>
        </div>
    );
}

//Browser URL:
//http://localhost:3000/products/123/reviews/111