import Link from "next/link";

export default function Rendering() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Rendering Page T-44/50</h1>
            <br />
            <ul className="grid grid-cols-2 gap-4">
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/client">
                        Client Site Rendering-T51
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/server">
                        Server Site Rendering-T52
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/static-rendering">
                        Static Rendering-T53
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/dynamic-rendering">
                        Dynamic Rendering-T54
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/generate-static-params">
                        GenerateStaticParams-T55
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/generate-dynamic-params">
                        GenerateDynamicParams-T56
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href="/rendering/streaming">
                        Streaming/Suspense-T57
                    </Link>
                </li>
            </ul>
        </div>
    );
}