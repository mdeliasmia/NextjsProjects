import Link from "next/link";

export default function Heatmap() {
    return (
        <div className="bg-gray-600 min-h-[400px]">
            <h1>This is Parallel Route Heatmap Page</h1>
            <br />
            <div>
                <Link className="m-10 pt-2 pb-2 pl-2 pr-2 rounded-sm bg-blue-400 hover:bg-amber-400" href='/unmatched-routes/pie-chart'>Pie Chart</Link>
            </div>
        </div>
    );
}