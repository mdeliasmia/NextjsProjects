import { ServerFun } from "@/utils/server-lib";
// npm i server-only
// import { ClientFun } from "@/utils/client-lib";

export default function ServerComponent() {
    const serverRes = ServerFun();
    // const clientRes = ClientFun();

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Server Component Page T-59</h1>
            <h2>Server Response = {serverRes}</h2>
            {/* <h2>Client Response = {clientRes}</h2> */}
        </div>
    );
}

// Browser URL:
// http://localhost:3000/component/server