'use client';
// import { use } from "react";
import { useRouter } from "next/navigation";

// export default function Checkout({ params }: { params: Promise<{ nid: string }> }) {
// const { nid } = use(params);
export default function Checkout() {

    const router = useRouter();
    const handleBuyNow = () => {
        router.push(`/checkout/123`);
    }

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Cheackout Main Page</h1>
            <br />
            <button className={`mt-6 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500 }`} onClick={handleBuyNow}>
                Checkout Now
            </button>
        </div>
    );
}

//Browser URL:
//http://localhost:3000/checkout