export default async function Loading() {
    //Auto Call loading.tsx
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved");
        }, 2000);
    });

    return (
        <div className="m-10 min-h-7/12">
            <h1>This is loadingPage...</h1>
        </div>
    );
}

// Browser URL:
// http://localhost:3000/loading