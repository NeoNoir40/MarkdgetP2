import axios from "./axios";
//Clientes Login
export const registerRequest = async (user) => axios.post(`/clientes`, user);

export const loginRequest = async (user) => axios.post(`/clientes/login`, user);

export const verifyTokenRequest = async () => axios.get(`/clientes/verify`);

export const logoutRequest = async () => axios.post(`/clientes/logout`);
//Clientes Login


//Vendedor login

export const registroVendedor = async (vendedor) => axios.post(`/vendedor`, vendedor);


//Venddedor login

//Administradores Login

export const loginAdmin = async (admin) => axios.post(`/administradores/login`, admin);

export const verifyTokenRequestAdmin = async () => axios.get(`/administradores/verify`);

//Administradores Login


//Vendedor Login
export const loginVendedor = async (vendedor) => axios.post(`/vendedor/login`, vendedor);

export const verifyTokenRequestVendedor = async () => axios.get(`/vendedor/verify`);

//Administradores CRUD DE TODO EL SISTEMA

//VISTAS



export const clientesView = async () => axios.get(`/administradores/clientes`);

export const viewProductos = async () => axios.get(`/productos`);

export const viewCategorias = async () => axios.get(`/categorias`);

export const viewCategoriasProductos = async () => axios.get(`/productosCategoriasRoutes`);

export const viewVendores = async () => axios.get(`/vendedor`);

//VISTAS


//CREAR COSAS

export const CrearProductoCategoria = async (productoCategoria) => axios.post(`/productosCategoriasRoutes/`, productoCategoria);

export const CrearProducto = async (producto) => axios.post(`/productos`, producto);


export const CrearCategoria = async (categoria) => axios.post(`/categorias`, categoria);

//CREAR COSAS


//ACTUALIZAR COSAS


export const updateVendedorPorid = async (id, vendedor) => {
    try{
        const response = await axios.patch(`/vendedor/${id}`, vendedor);
        return response.data;
    }catch (error) {
        throw error;
    }
}
export const actualizarProductoCategoria = async (id, productoCategoria) => {
    try {
        const response = await axios.patch(`/productosCategoriasRoutes/${id}`, productoCategoria);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const ActualizarProducto = async (id, producto) => {
    try {
        const response = await axios.patch(`/productos/${id}`, producto);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar el producto", error);
        throw error;
    }
};

export const ActualizarCategoria = async (id, categoria) => {
    try {
        const response = await axios.patch(`/categorias/${id}`, categoria);
        return response.data;
    } catch (error) {
        throw error;
    }
};
//ACTUALIZAR COSAS

//OBTENER  POR ID

export const viewClientePorId = async (id) => {
    try {
        const response = await axios.get(`/clientes/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const viewVendedorPorId = async (id) => {
    try {
        const response = await axios.get(`/vendedor/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const viewProductoCategoriaPorId = async (id) => {
    try {
        const response = await axios.get(`/productosCategoriasRoutes/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const obtenerProductoPorId = async (id) => {
    try {
        const response = await axios.get(`/productos/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const obtenerCategoriaPorId = async (id) => {
    try {
        const response = await axios.get(`/categorias/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const ContarProductosVendedor = async (id) => {
    try {
        const response = await axios.get(`/productos/cantidad/${id}`);
        return response.data;
    }catch (error) {
        throw error;
    }
}


export const getVendedorPorId = async (id) => {
    try {
        const response = await axios.get(`/vendedor/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//OBTENER  POR ID


//ELIMINAR 

export const deleteUsuario = async (id) => {
    try {
        const response = await axios.delete(`/clientes/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar el usuario", error);
        throw error;
    }
}


export const deleteProductoCategoria = async (id) => axios.delete(`/productosCategoriasRoutes/${id}`);

export const deleteVendedor = async (id) => {
    try {
        const response = await axios.delete(`/vendedor/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar el vendedor", error);
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

export const EliminarCategoria = async (id) => {
    try {
        const response = await axios.delete(`/categorias/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar la categoria", error);
        throw error;
    }
}




//Administradores CRUD DE TODO EL SISTEMA


export const viewProfile = async () => axios.get(`/clientes/profile`);

export const viewProfileAdmin = async () => axios.get(`/administradores/profile`);

export const viewProfileVendedor = async () => axios.get(`/vendedor/profile`);

