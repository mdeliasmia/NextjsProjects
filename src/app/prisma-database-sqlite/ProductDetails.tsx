'use client'
import { useOptimistic } from 'react'
import { DeleteProductHandler } from "@/actions/product-action"
import Link from "next/link"
import Form from 'next/form'

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
}

export const ProductDetails = ({ products }: { products: Product[] }) => {


    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter(product => product.id !== productId)
    })

    const removeProduct = async (id: number) => {
        setOptimisticProducts(id)
        await DeleteProductHandler(id)
    }

    return (
        <div className='m-10 min-h-7/12'>
            <div className="flex gap-10">
                <h1>This is Prisma Database SQLite Page T-68</h1>
                <div>
                    <Link className="bg-blue-400 pt-3 pb-3 pl-2 pr-2 rounded-sm hover:bg-amber-400" href="/prisma-database-sqlite/client-data-mutations">Add Product</Link>
                </div>
            </div>
            <br />
            <h2>Products</h2>
            <div className="flex w-full gap-2">
                <div className="flex flex-wrap gap-2 w-full">
                    {optimisticProducts.map((product) => (
                        <div key={product.id} className="p-4 w-full bg-white text-gray-900 rounded-lg shadow-sm border">
                            <h3 className="text-lg font-semibold">
                                <Link href={`prisma-database-sqlite/${product.id}`} className="text-blue-600 hover:underline">
                                    {product.title}
                                </Link>
                            </h3>
                            <p className="text-sm text-gray-700">{product.description}</p>
                            <p className="text-sm font-medium text-gray-900">Price: ${product.price}</p>
                            <div className="mt-2 flex gap-2">
                                <Link href={`/prisma-database-sqlite/${product.id}`} className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Edit
                                </Link>
                                <Form action={removeProduct.bind(null, product.id)}>
                                    <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">
                                        Delete
                                    </button>
                                </Form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}