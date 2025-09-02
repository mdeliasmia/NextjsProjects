import Link from "next/link";

export default function InterceptingRoutes() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This Intercepting Route Main Page T32</h1>
            <br />
            <div>
                <Link className="bg-blue-400 mt-6 pt-4 pb-4 pl-2 pr-2 rounded-sm hover:bg-amber-400" href={'/intercepting-routes/intercept-1'}>Go Intercept1</Link>
            </div>
            <br />
            <div className="mt-6">
                <Link className="bg-blue-400 mt-6 pt-4 pb-4 pl-2 pr-2 rounded-sm hover:bg-amber-400" href={'/intercepting-routes/intercept-3'}>Go Intercept3</Link>
            </div>
        </div>
    );
}

// Browser URL:
// http://localhost:3000/intercepting-routes