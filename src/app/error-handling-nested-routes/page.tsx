import Link from "next/link";

export default function ErrorHandlingNestedRoutes() {
    return (
        <div className="m-10">
            <h1>This is Error Handling Nested Routes Page</h1>
            <div className="flex mt-6">
                <ul>
                    <li className="mr-6 bg-amber-100 text-black pl-4 pr-4 rounded-md ">
                        <Link href="/error-handling-nested-routes/123" replace>GoWithErrorID</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}


// Browser URL:
// http://localhost:3000/error-handling-nested-routes