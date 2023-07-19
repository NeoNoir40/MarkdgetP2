import { Navigate , Outlet} from "react-router-dom";
import { useAuth } from "./context/AuthContext";



function ProtectedRoute(){
    const {loading, isAuthenticated} = useAuth()
    if(loading) return <h1>cargando...</h1>
    if(!isAuthenticated && !isAuthenticated) return<Navigate to ='/Login' replace/>
    return (
<Outlet/>
    );
}

export default ProtectedRoute