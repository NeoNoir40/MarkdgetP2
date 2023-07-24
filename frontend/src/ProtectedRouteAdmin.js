import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";



function ProtectedRouteAdmin() {
    const { loading, isAuthenticatedAdmin } = useAuth()


    if (loading) return <h1>Loading...</h1>;
    if (!isAuthenticatedAdmin && !loading) return <Navigate to="/LoginAdmin" replace />;
    return (
        <Outlet />
    );
}

export default ProtectedRouteAdmin