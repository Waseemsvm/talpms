import { useNavigate } from "react-router"
import { useAuth } from "../components/Auth/AuthContext";
import { Card } from "@mui/material";

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        login();
        navigate("/");
    }

    return <div>
        <h2>Login Page</h2>
        <button onClick={e => {
            handleLogin();
        }}>Login</button>
        <Card></Card>
    </div>
}