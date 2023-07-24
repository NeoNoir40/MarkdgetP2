// AuthContext.js

import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, loginVendedor, verifyTokenRequestVendedor, registroVendedor, verifyTokenRequest, loginAdmin, verifyTokenRequestAdmin, CrearProducto, CrearProductoCategoria, CrearCategoria } from '../api/auth';
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
  const [vendedor, setVendedor] = useState(null);
  const [isAuthenticatedVendedor, setIsAuthenticatedVendedor] = useState(false);
  const [isAuthenticatedSingUp, setIsAuthenticatedSingUp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);


  const newProductoCategoria = async (productoCategoria) => {
    try {
      await CrearProductoCategoria(productoCategoria);
      console.log(productoCategoria);
    } catch (error) {
      console.error('Error al crear el productoCategoria', error);
      console.log(productoCategoria);
    }
  }


  //Funcion para agregar un producto
  const newProducto = async (producto) => {
    try {
      // Llama a la función newProducto de la API con los datos del producto
      await CrearProducto(producto);
      // Realiza otras acciones necesarias, como actualizar la lista de productos, etc.
    } catch (error) {
      console.error('Error al crear el producto', error);
    }
  };

  const newCategoria = async (categoria) => {
    try {
      // Llama a la función newProducto de la API con los datos del producto
      await CrearCategoria(categoria);
      // Realiza otras acciones necesarias, como actualizar la lista de productos, etc.
    } catch (error) {
      console.error('Error al crear el producto', error);
    }
  };



  //Elimina Los Errores dentro de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);


  //registro del usaurio
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticatedSingUp(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signupVenedor = async (vendedor) => {
    try {
      const res = await registroVendedor(vendedor);
      console.log(res.data);
      setVendedor(res.data);
      setIsAuthenticatedVendedor(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  //login para el usuario
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


  //Chequea el login de los usuarios
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

  useEffect(() => {
    checkLogin();
  }, []);


  //login vendedor
  const signinVendedor = async (vendedor) => {
    try {
      const res = await loginVendedor(vendedor);
      console.log(res);
      console.log(vendedor);
      setVendedor(res.data);
      setIsAuthenticatedVendedor(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.error]);
    }
  };

  const checkVendedorLogin = async () => {
    const cookiesv = Cookies.get();
    console.log(cookiesv.tokenv);

    if (!cookiesv.tokenv) {
      console.log('Token no se encontro el token del vendedor');
      setIsAuthenticatedVendedor(false);
      setLoading(false);
      return;
    }

    try {
      const res = await verifyTokenRequestVendedor(cookiesv.tokenv);
      console.log('Respuesta del servidor vendedor:', res);

      if (!res.data) {
        console.log('Respuesta del servidor vendedor sin datos');
        return setIsAuthenticatedVendedor(false);
      }
      setIsAuthenticatedVendedor(true);
      setVendedor(res.data);
      setLoading(false);
    } catch (error) {
      console.log('Error al verificar tokenv:', error);
      setIsAuthenticatedVendedor(false);
      setLoading(false);
    }
  };
  //
  useEffect(() => {
    checkVendedorLogin();
  }, []);




  //login para el admin
  const signinAdmin = async (admin) => {
    try {
      const res = await loginAdmin(admin);
      console.log(res);
      console.log(admin);
      setAdmin(res.data);
      setIsAuthenticatedAdmin(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.error]);
    }
  };



  //ValidarAdminLogin
  const checkAdminLogin = async () => {
    const cookiesa = Cookies.get();
    console.log(cookiesa.tokena);

    if (!cookiesa.tokena) {
      console.log('Token no se encontro el token del admin');
      setIsAuthenticatedAdmin(false);
      setLoading(false);
      return;
    }

    try {
      const res = await verifyTokenRequestAdmin(cookiesa.tokena);
      console.log('Respuesta del servidor admin:', res);

      if (!res.data) {
        console.log('Respuesta del servidor admin sin datos');
        return setIsAuthenticatedAdmin(false);
      }

      setIsAuthenticatedAdmin(true);
      setAdmin(res.data);
      setLoading(false);
    } catch (error) {
      console.log('Error al verificar token:', error);
      setIsAuthenticatedAdmin(false);
      setLoading(false);
    }
  };
  //
  useEffect(() => {
    checkAdminLogin();
  }, []);



  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUser(null);
    // Limpiar el estado del usuario al cerrar sesión
  };

  const logoutAdmin = () => {
    Cookies.remove('tokena');
    setIsAuthenticatedAdmin(false);
    setAdmin(null); // Limpiar el estado del administrador al cerrar sesión
  };

  const logoutVendedor = () => {
    Cookies.remove('tokenv');
    setIsAuthenticatedVendedor(false);
    setVendedor(null); // Limpiar el estado del administrador al cerrar sesión
  };


  return (
    <AuthContext.Provider
      value={{
        signup,
        loginVendedor,
        signin,
        loading,
        user,
        isAuthenticated,
        isAuthenticatedAdmin,
        isAuthenticatedSingUp,
        isAuthenticatedVendedor,
        vendedor,
        errors,
        admin,
        logoutAdmin,
        logout,
        loginAdmin,
        signinAdmin,
        newProducto,
        newCategoria,
        newProductoCategoria,
        signupVenedor,
        verifyTokenRequestVendedor,
        signinVendedor,
        logoutVendedor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
