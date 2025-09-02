export default async function Review() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div>
            <h1>This is React Component Review Page</h1>
        </div>
    );
}