
export default async function DynamicErrorHandling({ params }: { params: Promise<{ errorid: number }> }) {
    const errorid = (await params).errorid;

    if (errorid > 100) {
        throw new Error("Error Hadling Nested ROutes ErrorID >100");
    }

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Dynamic Error Handling Nested Routes Page</h1>
            <h1>This  Error ID = {errorid}</h1>
        </div>
    );
}


// Browser URL:
// http://localhost:3000/error-handling-nested-routes/123