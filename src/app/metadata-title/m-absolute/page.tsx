import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    absolute: 'mAbsoluteTitle',
  },
}

export default function MetadataAbsolute() {
    return (
        <div>
            <h1>This is Metadata About page</h1>
        </div>
    );
}

//Browser URL:
//http://localhost:3000/metadata-title/m-absolute