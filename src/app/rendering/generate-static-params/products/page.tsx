import Link from "next/link";

export default function GenerateStaticParamsProducts() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Dynamic Rendering Products Page T-55</h1>
            <br />
            <ul className="grid grid-cols-2 gap-4">
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/generate-static-params/products/1">
                        Go to 1st Product Details page
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/generate-static-params/products/2">
                        Go to 2nd Product Details page
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/generate-static-params/products/3">
                        Go to 3rd Product Details page
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/generate-static-params/products/4">
                        Go to 4th Product Details page
                    </Link>
                </li>
            </ul>
        </div>
    );
}

// Browser URL:
// http://localhost:3000/rendering/generate-static-params/products