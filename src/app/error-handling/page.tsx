import Link from "next/link";

export default function ErrorHandling() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Error Handling Page T-25</h1>
            <div className="flex mt-6">
                <ul>
                    <li className="mr-6 bg-amber-100 text-black pl-4 pr-4 rounded-md ">
                        <Link href="/error-handling/111" replace>GoWithErrorID</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}


// Browser URL:
// http://localhost:3000/error-handling