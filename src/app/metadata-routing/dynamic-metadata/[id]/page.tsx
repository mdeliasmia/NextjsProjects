import { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const productId = (await params).id;

    return {
        title: `Dynamic Product ${productId}`,
        description: 'Dynamic Product Description',
    };
}

export default async function DynamicMetadataWithID({ params }: Props) {
    const id = (await params).id;
    return (
        <div>
            <h1>Dynamic Metadata Page With ID = {id}</h1>
        </div>
    );
}

//Browser Url:
// http://localhost:3000/routing-metadata/dynamic-metadata/123Apple