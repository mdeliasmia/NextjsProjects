export default async function Product() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (
        <div>
            <h1>This is React Component Product Page</h1>
        </div>
    );
}