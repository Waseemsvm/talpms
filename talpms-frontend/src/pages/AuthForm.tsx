import { useLocation, useNavigate } from "react-router"
import { useAuth } from "../components/Auth/AuthContext";
import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function AuthForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const isLogin = location.pathname == "/login";

    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
    const [serverError, setServerError] = useState('');


    const validate = () => {
        const newErrors = { email: "", password: "", confirmPassword: "" };
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!isLogin && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        login();
        navigate("/");
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setServerError("");
        handleLogin();

        if (!validate()) return;

        // try {
        //     if (isLogin) {
        //         const res = await axios.post('http://localhost:5000/api/auth/login', formData);
        //         localStorage.setItem('token', res.data.token);
        //         navigate('/dashboard');
        //     } else {
        //         await axios.post('http://localhost:5000/api/auth/register', formData);
        //         navigate('/login');
        //     }
        // } catch (err) {
        //     setServerError(err.response?.data?.msg || 'Something went wrong');
        // }

    }

    return <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f2f2f2">
        <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
            <Typography variant="h5" gutterBottom>{isLogin ? "Login" : "Register"}</Typography>
            {
                serverError && (
                    <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                        {serverError}
                    </Typography>
                )
            }
            <form onSubmit={handleSubmit} noValidate>
                <TextField fullWidth
                    margin="normal"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField fullWidth
                    margin="normal"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={formData.password}
                    error={!!errors.password}
                    helperText={errors.password}
                />
                {
                    !isLogin && (<TextField fullWidth
                        margin="normal"
                        label="Password"
                        name="confirmPassword"
                        type="password"
                        onChange={handleChange}
                        value={formData.confirmPassword}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                    />)}
                <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 1 }}>
                    {isLogin ? "Login" : "Register"}
                </Button>
                <Typography>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{"  "}
                    <Link href={isLogin ? "/register" : "/login"}>
                        {isLogin ? 'Register' : 'Log In'}
                    </Link>
                </Typography>
            </form>
        </Paper>
    </Box>
}