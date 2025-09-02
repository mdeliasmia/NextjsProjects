import { users } from "@/data/users";

export async function GET(){
    return Response.json(users);
}


// Browser URL:
// http://localhost:3000/redirects-in-route-handlers/users/api