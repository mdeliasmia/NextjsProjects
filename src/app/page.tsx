import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-3/4">
      <main className="flex flex-col row-start-2 items-center justify-center ">
        <div className="m-6">
          <div className="mb-10">
            This is Redux Toolkit Main page T-80
          </div>
          <ul className="grid grid-cols-2 gap-4">
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href={`/counter`}>
                Counter
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}


// Browser URL:
// http://localhost:3000