import Product from "@/components/Product";
import Review from "@/components/Review";
import { Suspense } from "react";

export default function StreamingRendering() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Streaming Rendering Page T-57</h1>
            <br />
            <Suspense fallback="Product Loading...">
                <Product />
            </Suspense>
            <br />
            <Suspense fallback="Review Loading...">
                <Review />
            </Suspense>
        </div>
    );
}