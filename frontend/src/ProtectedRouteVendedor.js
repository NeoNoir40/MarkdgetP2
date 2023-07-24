import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";



function ProtectedRouteVendedor() {
    const { loading, isAuthenticatedVendedor } = useAuth()


    if (loading) return <h1>Loading...</h1>;
    if (!isAuthenticatedVendedor && !loading) return <Navigate to="/LoginVendedor" replace />;
    return (
        <Outlet />
    );
}

export default ProtectedRouteVendedor