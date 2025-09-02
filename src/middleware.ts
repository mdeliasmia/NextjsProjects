import { type NextRequest } from "next/server";
import {  NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const userSetting=request.cookies.get('test');
    const response=NextResponse.next();
    if(userSetting){
        console.log(userSetting);
    }else{
        response.cookies.set('xyza','112233');
    }

    response.headers.set('ELIAS-header','ELIAS value');

    return response;
    // if(request.nextUrl.pathname=='/middleware'){
    //     return NextResponse.redirect(new URL('/',request.url));
    // }
}

// export const config={
//     matcher:'/middleware'
// }


// Browser URL
// http://localhost:3000/cookies-in-route-handlers/middleware
// http://localhost:3000/cookies-in-route-handlers/test