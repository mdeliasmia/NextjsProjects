import Link from "next/link";

export default function ProgrammaticallyNavigate() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>Programmatically Navigate Page</h1>
            <br />
            <Link href={'/navigate-programmatically/123'} className={`mt-6 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500 `} >
                Buy Now
            </Link>
        </div>
    );
}

//Browser URL:
//http://localhost:3000/navigate-programmatically