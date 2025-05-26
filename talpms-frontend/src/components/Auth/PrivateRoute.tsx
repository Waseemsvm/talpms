import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthContext";

export default function PrivateRoute() {
    const { isAuthenticated } = useAuth();
    //  const isAuthenticated = !!localStorage.getItem('token');
    console.log('isAuthenticated', isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}