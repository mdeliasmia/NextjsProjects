// export const dynamic = 'force-static';
export const revalidate=10;

export async function GET(){
    return Response.json({time: new Date().toLocaleTimeString()});
}


// Browser URL:
// http://localhost:3000/caching-in-route-handlers/check-time