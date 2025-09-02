// import { headers,cookies } from "next/headers";
import { cookies } from "next/headers";
// import { NextResponse } from "next/server";
// import { useCallback } from "react";

// export async function GET( request : NextResponse) {
    // const userCookie=request.cookies.get('test');
    // console.log(userCookie);
    
export async function GET() {
    const userCookie= await cookies();
    console.log(userCookie.get('test'));
    console.log(userCookie.getAll('test'));


    return new Response('<h2>Hello Nextjs Route Handler</h2>', {
        headers:{
            'Content-Type':'text/html',
            'Set-Cookie' : 'test=12345'
        }
    });
}

// Browser URL for Response Headers:
// http://localhost:3000/cookies-in-route-handlers/test

// Thunder CLient Request for Cookies
// http://localhost:3000/cookies-in-route-handlers/test