import { useNavigate } from "react-router"
import { useAuth } from "./AuthContext";

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
    </div>
}