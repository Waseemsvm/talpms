import { createContext, useContext, useState } from "react"

export type IAuth = { isAuthenticated: boolean, login: VoidFunction, logout: VoidFunction }

const AuthContext = createContext<IAuth>(null as unknown as IAuth);

export default function AuthProvider({ children }: { children: any }) {

    const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem("auth") == "true");

    const login = () => {
        localStorage.setItem("auth", "true");
        setIsAuthenticated(true);
    }
    const logout = () => {
        localStorage.removeItem("auth");
        setIsAuthenticated(false);
    }

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}> {children}</AuthContext.Provider>
}

export const useAuth = () => useContext<IAuth>(AuthContext);