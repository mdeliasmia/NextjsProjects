import { users } from "@/data/users";

export async function GET(
    request:Request,
    {params}:{params:Promise<{id:string}>}
){
    const {id}=(await params) ;

    const user=users.find(item=>item.id==Number(id)); 
    return Response.json(user);
}


// Browser URL: GET
// http://localhost:3000/route-get-request/user/api

//POST Requested: THUNDER CLIENT (Extensions)
//// http://localhost:3000/route-get-request/user/api