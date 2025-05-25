
import { Routes, Route, BrowserRouter } from "react-router";
import AdminAppLayout from "./layouts/AdminAppLayout";
import AdminDashBoard from "./pages/AdminDashBoard";
import StudentList from "./pages/StudentList";
import AuthProvider from "./components/Auth/AuthContext";
import PrivateRoute from "./components/Auth/PrivateRoute";
import LoginPage from "./components/Auth/LoginPage";

export default function AdminApp() {
    const appDrawerWidth = 240;
    return <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/signup" element></Route>
                <Route element={<PrivateRoute />} >
                    <Route path="/" element={<AdminAppLayout appDrawerWidth={appDrawerWidth} />}>
                        <Route index element={<AdminDashBoard />}></Route>
                        <Route path="students" element={<StudentList />}></Route>
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
}