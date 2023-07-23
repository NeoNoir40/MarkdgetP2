// AuthContext.js

import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest, loginAdmin, verifyTokenRequestAdmin , CrearProducto , ActualizarProducto, obtenerProductoPorId} from '../api/auth';
import Cookies from 'js-cookie';


export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar autenticado con AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);



  const updateProducto = async (id, producto) => {
    try {
      // Llama a la función ActualizarProducto de la API con los datos del producto
      await ActualizarProducto(id, producto);
      // Realiza otras acciones necesarias, como actualizar la lista de productos, etc.
      console.log("Producto actualizado exitosamente");
    } catch (error) {
      console.error("Error al actualizar el producto", error);
      throw error; // Puedes relanzar el error si es necesario manejarlo en el componente que llama a esta función.
    }
  };
  
  const newProducto = async (producto) => {
    try {
      // Llama a la función newProducto de la API con los datos del producto
      await CrearProducto(producto);
      // Realiza otras acciones necesarias, como actualizar la lista de productos, etc.
    } catch (error) {
      console.error('Error al crear el producto', error);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const checkLogin = async () => {
    const cookies = Cookies.get();
    console.log(cookies.token);

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

  const checkAdminLogin = async () => {
    const cookies = Cookies.get();
    console.log(cookies.token);

    if (!cookies.token) {
      console.log('Token no encontrado en cookies');
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    try {
      const res = await verifyTokenRequestAdmin(cookies.token);
      console.log('Respuesta del servidor:', res);

      if (!res.data) {
        console.log('Respuesta del servidor sin datos');
        return setIsAuthenticated(false);
      }

      setIsAuthenticated(true);
      setAdmin(res.data);
      setLoading(false);
    } catch (error) {
      console.log('Error al verificar token:', error);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    checkAdminLogin();
  }, []);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.error]);
    }
  };

  const signinAdmin = async (admin) => {
    try {
      const res = await loginAdmin(admin);
      console.log(res);
      setAdmin(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.error]);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUser(null);
    setAdmin(null); // Limpiar el estado del administrador al cerrar sesión
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated,
        errors,
        logout,
        signinAdmin,
        admin,
        newProducto,
        updateProducto,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
