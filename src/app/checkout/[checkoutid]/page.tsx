'use client';
import { use } from "react";
import { useRouter } from "next/navigation";

export default function Checkout({ params }: { params: Promise<{ checkoutid: string }> }) {
    const { checkoutid } = use(params);

    const router = useRouter();
    const handleBuyNow = () => {
        router.push(`/`);
    }
    const handleBack = () => {
        router.back();
    }

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Cheackout Page</h1>
            <h1>The Product ID = {checkoutid}</h1>
            <br />
            <button className={`mt-6 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500 }`} onClick={handleBuyNow}>
                Go Home
            </button>
            <button className={`mt-6 ml-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500 }`} onClick={handleBack}>
                Go Back
            </button>
        </div>
    );
}

//Browser URL:
//http://localhost:3000/checkout/123