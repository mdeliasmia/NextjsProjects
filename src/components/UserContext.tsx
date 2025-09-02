'use client';
import { useContext } from "react";
import { createContext } from "react";

type User = {
    name: string,
    email: string,
    age: number
}
const userData: User = {
    name: 'ABCd',
    email: 'abcd@gmail.com',
    age: 23
}

const RootContex = createContext<User>(userData);

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        // <RootContex.Provider value={userData}>
        // From React-19 Provider is not mendatory
        <RootContex value={userData}>
            {children}
        </RootContex>
        // </RootContex.Provider>
    );
}

export const useRootContext = () => useContext(RootContex);