import axios from "./axios";

export const registerRequest = async (user) => axios.post(`/clientes`, user);

export const loginRequest = async (user) => axios.post(`/clientes/login`, user);

export const verifyTokenRequest = async () => axios.get(`/clientes/verify`);

export const logoutRequest = async () => axios.post(`/clientes/logout`);

export const loginAdmin = async (admin) => axios.post(`/administradores/login`, admin);

export const verifyTokenRequestAdmin = async () => axios.get(`/administradores/verify`);

export const clientesView = async () => axios.get(`/administradores/clientes`);

export const viewProductos = async () => axios.get(`/productos`);

export const viewCategorias = async () => axios.get(`/categorias`);

export const viewCategoriasProductos = async () => axios.get(`/productosCategoriasRoutes`);

export const CrearProducto = async (producto) => axios.post(`/productos`, producto);

export const ActualizarProducto = async (id, producto) => {
    try {
        const response = await axios.patch(`/productos/${id}`, producto);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar el producto", error);
        throw error;
    }
};


export const obtenerProductoPorId = async (id) => {
    try {
        const response = await axios.get(`/productos/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const EliminarProducto = async (id) => {
    try {
        const response = await axios.delete(`/productos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar el producto", error);
        throw error;
    }
};
