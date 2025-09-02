// import { headers } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET( request : NextResponse) {
export async function GET() {
    /**Request Headers Basic JS*/
    /** GET Request with Thunder Client */
    // const requestHeaders=new Headers(request.headers);
    // console.log(requestHeaders.get('abc'));
    
    /**Request Headers Next/Headers */
    // const requestHeaders= await headers();
    // console.log(requestHeaders.get('abc'));
    // console.log(requestHeaders.get('xyz'));

    /**Response Headers */
    return new Response('<h2>Hello Nextjs Route Handler</h2>', {
        headers:{
            'Content-Type':'text/html'
        }
    });
}

// Browser URL for Response Headers:
// http://localhost:3000/headers-in-route-heandlers/test