import { addProduct } from "@/prisma-db";

export async function POST(request: Request) {
    const body = await request.json();
    const { title, price, description } = body;
    const newProduct = addProduct(title, Number(price), description);

    return new Response(JSON.stringify(newProduct), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}