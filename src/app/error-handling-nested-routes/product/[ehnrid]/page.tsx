export default async function ErrorHandlingNestedRoutesWithID({ params }: { params: Promise<{ ehnrid: number }> }) {
    const ehnrid = (await params).ehnrid;

    if (ehnrid > 100) {
        throw new Error("Error Hadling Nested Routes ehnrid >100");
    }

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Dynamic Error Handling Nested Routes Page</h1>
            <h1>This  Error ID = {ehnrid}</h1>
        </div>
    );
}


// Browser URL:
// http://localhost:3000/error-handling-nested-routes/12