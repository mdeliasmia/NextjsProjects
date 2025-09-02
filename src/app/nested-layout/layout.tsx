export default function NestedLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>This is Nested ROUTE Header</h1>
            {children}
        </div>
    );
}