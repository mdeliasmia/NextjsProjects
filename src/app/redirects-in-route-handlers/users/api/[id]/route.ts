import { users } from "@/data/users";
import { redirect } from "next/navigation";

export async function GET(
    request:Request,
    {params}:{params:Promise<{id:string}>}
){
    const {id}=(await params) ;
    const user=users.find(item=>item.id==Number(id)); 
    console.log(user);
    if(user){
        return Response.json(user);
    }else{
        console.log("Hello");
        redirect('/redirects-in-route-handlers/users/api');
    }
}

export async function PATCH(request: Request, {params}:{params: Promise<{ id: string }>}) {
    const { id } = (await params);
    const userRequest=await request.json();
    const userIndex = users.findIndex(item => item.id == Number(id));

    users[userIndex]['name']=userRequest.name;

    return Response.json(users[userIndex]);
}

export async function DELETE(request: Request, {params}:{params: Promise<{ id: string }>}) {
    const {id} =(await params);
    const userIndex=users.findIndex(item=>item.id==Number(id));

    if(userIndex >0){
        users.splice(userIndex);
    }

    return Response.json({message: 'User Deleted '});
}

// Browser URL: GET
// http://localhost:3000/redirects-in-route-handlers/users/api/2

//POST Requested: THUNDER CLIENT (Extensions)
//// http://localhost:3000/redirects-in-route-handlers/users/api/222