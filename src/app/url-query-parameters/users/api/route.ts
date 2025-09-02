import { users } from "@/data/users";
import { NextRequest } from "next/server";

export async function GET(
    request:NextRequest
){
    const searchParams= request.nextUrl.searchParams;
    const userName= searchParams.get('username');
    const filterUser=userName ? users.find(item => item.username==userName):users; 
    return Response.json(filterUser);
}


// Browser URL: GET
// http://localhost:3000/url-query-parameters/users/api?username=Bret
// http://localhost:3000/url-query-parameters/users/api?username=Antonette
