import React, { useState, useEffect } from "react";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import IndicadorPag from "../components/PagIndicador";
import { useLocation, useNavigate } from "react-router-dom";
import { obtenerProductoPorId , viewProfileVendedor } from "../api/auth";
import axios from "axios";

function EditarProductoVendedor() {
    const navigate = useNavigate();
        const [vendedorData, setVendedorData] = useState(null);

    const [previewImagen, setPreviewImagen] = useState(null);
    const location = useLocation();
    const idProducto = new URLSearchParams(location.search).get("id");
    const [ProductosDatos, setProductosDatos] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: null,
        stock: "",
    });


useEffect(() => {
        const fetchVendedorData = async () => {
            try {
                const response = await viewProfileVendedor();
                setVendedorData(response.data);
            } catch (error) {
                console.error("Error al obtener los datos del vendedor", error);
            }
        };
        fetchVendedorData();
    }, []);


    // Función para cargar los detalles del producto por su id
    const cargarProductoPorId = async (id) => {
        try {
            const producto = await obtenerProductoPorId(id);
            setProductosDatos(producto);
            // Si el producto tiene una imagen, establecerla en el estado previewImagen
            if (producto.imagen) {
                setPreviewImagen(producto.imagen);
            }
        } catch (error) {
            console.error("Error al cargar el producto", error);
        }
    };

    useEffect(() => {
        cargarProductoPorId(idProducto);
    }, [idProducto]);

    // Función para manejar el cambio de la imagen seleccionada por el usuario
    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setPreviewImagen(URL.createObjectURL(file));
        setProductosDatos({
            ...ProductosDatos,
            imagen: file.name, // Guardar solo el nombre del archivo
        });
    };

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setProductosDatos({
            ...ProductosDatos,
            [name]: value,
        });
    };

    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            // Realizamos la actualización directamente con Axios
            await axios.patch(`http://localhost:3001/api/productos/${idProducto}`, ProductosDatos);
            alert("Producto actualizado correctamente");
            navigate(`/EditarProductosVendedor?id=${vendedorData?.id_vendedor}`);
        } catch (error) {
            console.error("Error al actualizar el producto ", error);
        }
    };

    return (
        <main>
            <div className="min-h-screen">
                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag TituloIndc={"Editar producto"} />
                    </div>
                    <div className="bg-[#222222] w-[600px] m-auto rounded-xl">
                        <form onSubmit={handleSumit}>
                            <div className="flex flex-col m-auto mt-[100px] p-10">
                                <label className="text-white">Nombre</label>
                                <input
                                    placeholder="Ingresa el nombre de tu producto"
                                    className="rounded-sm"
                                    name="nombre"
                                    value={ProductosDatos.nombre}
                                    onChange={HandleChange}
                                />

                                <label className="text-white">Descripcion</label>
                                <input
                                    className="h-[100px] rounded-sm"
                                    placeholder="Ingresa una descripción del producto"
                                    name="descripcion"
                                    value={ProductosDatos.descripcion}
                                    onChange={HandleChange}
                                />

                                <label className="text-white">Precio</label>
                                <input
                                    type="number"
                                    placeholder="Ingresa el precio"
                                    className="rounded-sm"
                                    name="precio"
                                    value={ProductosDatos.precio}
                                    onChange={HandleChange}
                                />

                                {previewImagen && (
                                    <img
                                        src={previewImagen}
                                        alt="Imagen Preseleccionada"
                                        style={{ maxWidth: "200px", marginBottom: "10px" }}
                                    />
                                )}

                                <label className="text-white">Imagen</label>
                                <input
                                    type="file"
                                    className="text-white rounded-sm"
                                    name="imagen"
                                    onChange={handleImagenChange}
                                />

                                <label className="text-white">Stock</label>
                                <input
                                    type="number"
                                    placeholder="Ingresa la cantidad de stock"
                                    className="rounded-sm"
                                    name="stock"
                                    value={ProductosDatos.stock}
                                    onChange={HandleChange}
                                />

                                <BotonGeneralRealizarAccion texto={"Enviar"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default EditarProductoVendedor;
