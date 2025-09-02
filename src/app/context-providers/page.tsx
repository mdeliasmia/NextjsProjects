'use client';
import { useRootContext } from "@/components/UserContext";

export default function ContextProviders() {
    const rootUser = useRootContext()
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Context Providers Page T-60</h1>
            <br />
            <p>ContextProvider userName = {rootUser.name}</p>
            <p>ContextProvider userEmail = {rootUser.email}</p>
            <p>ContextProvider userID = {rootUser.age}</p>
        </div>
    );
}

/**RootProvider Provided from RootLayout*/