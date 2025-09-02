import Link from "next/link";

export default function Intercept3() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Intercept-3 Page</h1>
            <br />
            <div>
                <Link className="bg-blue-400 mt-6 pt-4 pb-4 pl-2 pr-2 rounded-sm hover:bg-amber-400" href={'/intercepting-routes'}>Go InterceptMain</Link>
            </div>
        </div>
    );
}


// Browser URL:
// http://localhost:3000/intercepting-routes/intercept-3