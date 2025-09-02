import { users } from "@/data/users";

export async function GET(){
    // return new Response('User GET Request Route');
    return Response.json(users);
}

export async function POST( request : Request ) {
    const user = await request.json(); 

    const newUser ={
        id: users.length + 1,
        name : user.name,
        username : user.username,
        email : user.email,
    } 
    
    users.push(newUser);

    const resData={
        message:'User created',
        user:newUser
    }

    return new Response(JSON.stringify(resData), {
        headers:{ 'COntent-Type': 'application/json'},
        status: 201,
    });
}

// Browser URL: GET
// http://localhost:3000/route-get-request/user/api

//POST Requested: THUNDER CLIENT (Extensions)
//// http://localhost:3000/route-get-request/user/api