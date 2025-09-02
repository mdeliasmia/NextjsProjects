import Link from "next/link";

export default function Component() {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Server/Client Component Main Page</h1>
            <br />
            <ul className="grid grid-cols-2 gap-4">
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href={`/component/server`}>
                        Server-Only T-59
                    </Link>
                </li>
                <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
                    <Link href={`/component/client`}>
                        Client-Only T-61
                    </Link>
                </li>
            </ul>
        </div>
    );
}

// Browser URL:
// http://localhost:3000/component