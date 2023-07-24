import React, { useState, useEffect } from "react";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import IndicadorPag from "../components/PagIndicador";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";
import { viewProductoCategoriaPorId, viewCategorias, viewProductos } from "../api/auth";
import axios from "axios";

function EditarProductosCategorias() {
    const navigate = useNavigate();
    const [Categorias, setCategoria] = useState([]);
    const [Productos, setProductos] = useState([]);
    const [previewImagen, setPreviewImagen] = useState(null);
    const location = useLocation();
    const idProductoCategoria = new URLSearchParams(location.search).get("id");

    const [CategoriasProductosDatos, setCategoriasProductosDatos] = useState({
        id_producto: "",
        id_categoria: "",
        imagen: null,
    });

    useEffect(() => {
        const listaCategorias = async () => {
            try {
                const resultado = await viewCategorias();
                setCategoria(resultado.data);
            } catch (error) {
                console.log("no se pudo obtener", error);
            }
        };
        listaCategorias();
    }, []);

    useEffect(() => {
        const listaProductos = async () => {
            try {
                const resultado = await viewProductos();
                setProductos(resultado.data);
            } catch (error) {
                console.log("no se pudo obtener", error);
            }
        };
        listaProductos();
    }, []);

    const cargarProductoCategoriaPorId = async (id) => {
        try {
            const productoCategoria = await viewProductoCategoriaPorId(id);
            setCategoriasProductosDatos(productoCategoria);
            if (productoCategoria.imagen) {
                setPreviewImagen(productoCategoria.imagen);
            }
        } catch (error) {
            console.log("Error al cargar el producto categoria", error);
        }
    };

    useEffect(() => {
        cargarProductoCategoriaPorId(idProductoCategoria);
    }, [idProductoCategoria]);

    const HandleChange = (selectedOption, name) => {
        setCategoriasProductosDatos({
            ...CategoriasProductosDatos,
            [name]: selectedOption.value,
        });
    };

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImagen(URL.createObjectURL(file));
            setCategoriasProductosDatos({
                ...CategoriasProductosDatos,
                imagen: file.name,
            });
        }
    };
    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                id_producto: CategoriasProductosDatos.id_producto,
                id_categoria: CategoriasProductosDatos.id_categoria,
                imagen: CategoriasProductosDatos.imagen,
            };
    
            console.log("Data a enviar:", dataToSend); // Agrega esta línea para verificar los datos antes de enviar la solicitud PATCH
    
            await axios.patch(`http://localhost:3001/api/productosCategoriasRoutes/${idProductoCategoria}`, dataToSend);    
            alert("Producto Actualizado correctamente");

            console.log(dataToSend);
            navigate("/CategoriaProd");
        } catch (error) {
            alert("Error al actualizar el producto", error);
            console.error("Error al actualizar el producto ", error);
        }
    };
    
    
//            await axios.patch(`http://localhost:3001/api/productosCategoriasRoutes/${idProductoCategoria}`, dataToSend);


    return (
        <main>
            <div className="min-h-screen">
                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag TituloIndc={"actualizar nuevo producto categoria"} />
                    </div>
                    <div className="bg-[#222222] w-[600px] m-auto  rounded-xl  ">
                        <form onSubmit={handleSumit}>
                            <div className=" flex flex-col  m-auto mt-[100px] p-10 ">
                                <label className="text-white">Categoria</label>
                                <Select
                                    options={Categorias.map((categoria) => ({
                                        value: categoria.id_categoria,
                                        label: categoria.nombre,
                                    }))}
                                    onChange={(selectedOption) => HandleChange(selectedOption, "id_categoria")}
                                    placeholder="Selecciona la categoria"
                                />

                                <label className="text-white">Producto</label>
                                <Select
                                    options={Productos.map((producto) => ({
                                        value: producto.id_producto,
                                        label: producto.nombre,
                                    }))}
                                    onChange={(selectedOption) => HandleChange(selectedOption, "id_producto")}
                                    placeholder="Selecciona el producto"
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

                                <BotonGeneralRealizarAccion texto={"Enviar"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default EditarProductosCategorias;
