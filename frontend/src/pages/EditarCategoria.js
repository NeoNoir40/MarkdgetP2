import React, { useState, useEffect } from "react";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import IndicadorPag from "../components/PagIndicador";
import { useLocation, useNavigate } from "react-router-dom";
import { obtenerCategoriaPorId } from "../api/auth";
import axios from "axios";

function EditarCategoria() {
    const navigate = useNavigate();
    const [previewImagen, setPreviewImagen] = useState(null);
    const location = useLocation();
    const idCategoria = new URLSearchParams(location.search).get("id");
    const [categoriasDatos, setCategoriasDato] = useState({
        nombre: "",
        imagen_categoria: null,
    });

    // Función para cargar los detalles del categoria por su id
    const cargarCategoriaPorId = async (id) => {
        try {
            const categoria = await obtenerCategoriaPorId(id);
            setCategoriasDato(categoria);
            // Si el categoria tiene una imagen, establecerla en el estado previewImagen
            if (categoria.imagen_categoria) {
                setPreviewImagen(categoria.imagen_categoria);
            }
        } catch (error) {
            console.error("Error al cargar el categoria", error);
        }
    };

    useEffect(() => {
        cargarCategoriaPorId(idCategoria);
    }, [idCategoria]);

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setPreviewImagen(URL.createObjectURL(file));
        setCategoriasDato({
            ...categoriasDatos,
            imagen_categoria: file.name, // Guardar solo el nombre del archivo
        });
    };


    const HandleChange = (e) => {
        const { name, value } = e.target;
        setCategoriasDato({
            ...categoriasDatos,
            [name]: value,
        });
    };

    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            // Realizamos la actualización directamente con Axios
            await axios.patch(`http://localhost:3001/api/categorias/${idCategoria}`, categoriasDatos);
            alert("Categoria actualizada correctamente");
            console.log(categoriasDatos);
            navigate("/CategoriasAdmin");
            
        } catch (error) {
            alert("Categoria no creada correctamente");
            console.error("Error al actualizar la categoria ", error);
        }
    };

    return (
        <main>
            <div className="min-h-screen">
                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag TituloIndc={"Editar categoria"} />
                    </div>
                    <div className="bg-[#222222] w-[600px] m-auto rounded-xl">
                        <form onSubmit={handleSumit}>

                            <div className="flex flex-col m-auto mt-[100px] p-10">


                                <label className="text-white">Nombre</label>
                                <input
                                    placeholder="Ingresa el nombre de tu categoria"
                                    className="rounded-sm"
                                    name="nombre"
                                    value={categoriasDatos.nombre}
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
                                    name="imagen_categoria"
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

export default EditarCategoria;
