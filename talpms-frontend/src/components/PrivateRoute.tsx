import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthContext";

export default function PrivateRoute() {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}