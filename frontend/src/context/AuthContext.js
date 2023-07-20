import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth'
import Cookies from 'js-cookie';


export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth debe estar autenticado con AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }
    };


    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.error])
        }
    }



    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            console.log('Cookies:', cookies);

            if (!cookies.token) {
                console.log('Token no encontrado en cookies');
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                console.log('Respuesta del servidor:', res);

                if (!res.data) {
                    console.log('Respuesta del servidor sin datos');
                    return setIsAuthenticated(false);
                }

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                console.log('Error al verificar token:', error);
                setIsAuthenticated(false);
                setLoading(false);
            }
        };
        checkLogin();
    }, []);

    return <AuthContext.Provider value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated,
        errors,

    }}> {children}
    </AuthContext.Provider>

}

export default AuthContext;