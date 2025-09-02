import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'mTitle',
}

export default function MetadataTitle() {
    return (
        <div>
            <h1>This is Metadata About page</h1>
        </div>
    );
}

//Browser URL:
//http://localhost:3000/metadata-title/m-title