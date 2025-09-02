import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-3/4">
      <main className="flex flex-col row-start-2 items-center justify-center ">
        <div className="m-6">
          <div className="mb-10">
            This is Main page
          </div>
          <ul className="grid grid-cols-2 gap-4">
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href={`/about`}>
                About
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/charts">
                Charts
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/lectures">
                Lectures
              </Link>
            </li>

            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/products">
                Products
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/params">
                Params
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/nested-layout">
                Nested Layout - T15
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/metadata-routing">
                Metadata Routing - T17
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/metadata - title">
                Metadata Title - T18
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/link">
                Link - T19
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/link-active">
                Active Link - T20
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/params-search">
                Search Params - T21
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/navigate-programmatically">
                ProgrammaticallyNavigate - T22
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/templates">
                Templates Input - T23
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/error-handling">
                ErrorHandling - T25
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/error-handling-nested-routes">
                ErrorHandlingNestedRoutes
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/parallel-routes">
                ParallelRoutes - T29
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/unmatched-routes">
                UnmatchedRoutes - T30
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/conditional-routes">
                ConditionalRoutes - T31
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/intercepting-routes">
                InterceptingRoutes - T32
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/parallel-intercepting-routes">
                ParallelInterceptingRoutes - T33
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/route-handlers">
                RouteHandlers - T34
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/route-get-request/user/api">
                GETRequestRoute - T35
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/route-get-request">
                POSTRequestRoute - T36
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/route-get-request/user/api/3">
                DynamicGetRequestRoute - T37
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/patch-request">
                PATCH/UPDATE-Request-T38
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/delete-request">
                DELETE-Request-T39
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/url-query-parameters">
                URL-QueryParameters-T40
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/headers-in-route-heandlers">
                Headers-in-RouteHandlers-T41
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/cookies-in-route-handlers">
                Cookies-in-RouteHandlers-T42
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/redirects-in-route-handlers">
                Redirects-in-RouteHandlers-T43
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/caching-in-route-handlers">
                Caching-in-RouteHandlers-T44
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/middleware">
                Middleware-T45
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/rendering">
                Rendering-T46/../57
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/component">
                Server/Client Component-T58/59/61
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/context-providers">
                ContextProviders-T60
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/data-fetching">
                DataFetching-T63/./67
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/prisma-database-sqlite">
                PrismaDatabaseSQLite-T68/69
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/prisma-database-sqlite/client-data-mutations">
                PrismaDataMutations-T70
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/prisma-database-sqlite/use-server">
                PrismaUseServer-T71/../79
              </Link>
            </li>
            <li className={`mr-3 pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-400  hover:bg-amber-500`}>
              <Link href="/redux-toolkit">
                ReduxToolkit T-80
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