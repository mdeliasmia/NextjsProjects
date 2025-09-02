import Link from "next/link";

export default function DataFetching() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Data Fetching Page T-63</h1>
            <ul className="grid grid-cols-2 gap-4">
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href={`/data-fetching/client-data`}>
                        Client-DataFetch T-63/65
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href={`/data-fetching/server-data`}>
                        Server-DataFetch T-64/65
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href={`/data-fetching/sequential-data-fetching`}>
                        SequentialDataFetching T-66
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href={`/data-fetching/parallal-data-fetching`}>
                        ParallalDataFetching T-67
                    </Link>
                </li>
            </ul>
        </div>
    );
}


// Browser URL:
// http://localhost:3000/data-fetching