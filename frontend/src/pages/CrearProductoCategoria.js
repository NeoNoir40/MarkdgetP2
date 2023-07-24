import React, { useState, useEffect } from "react";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import IndicadorPag from "../components/PagIndicador";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { viewCategorias, viewProductos } from "../api/auth";
import Select from "react-select";

function CreateProductoCat() {
    const navigate = useNavigate();
    const [Categorias, setCategoria] = useState([]);
    const [Productos, setProductos] = useState([]);
    const { newProductoCategoria } = useAuth();
    const [categoriasProductosDatos, setCategoriasProductosDatos] = useState({
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

    const HandleChange = (selectedOption, name) => {
        setCategoriasProductosDatos({
            ...categoriasProductosDatos,
            [name]: selectedOption.value,
        });
    };


    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCategoriasProductosDatos({
                ...categoriasProductosDatos,
                imagen: file.name, // Guardamos solo el nombre del archivo
            });
        }
    };
    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                id_producto: categoriasProductosDatos.id_producto,
                id_categoria: categoriasProductosDatos.id_categoria,
                imagen: categoriasProductosDatos.imagen,
            };

            // Enviar el nuevo objeto al servidor
            await newProductoCategoria(dataToSend);

            alert("Producto creado correctamente");
            console.log(categoriasProductosDatos);
            navigate("/CategoriaProd");
        } catch (error) {
            alert("Error al crear el producto", error);
            console.error("Error al crear el producto ", error);
        }
    };

    return (
        <main>
            <div className="min-h-screen">
                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag TituloIndc={"Crear nuevo producto categoria"} />
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
                                    placeholder="Seleciona la categoria"
                                />

                                <label className="text-white">Producto</label>
                                <Select
                                    options={Productos.map((producto) => ({
                                        value: producto.id_producto,
                                        label: producto.nombre,
                                    }))}
                                    onChange={(selectedOption) => HandleChange(selectedOption, "id_producto")}
                                    placeholder="Seleciona el producto"
                                />

                                <label className="text-white">Imagen</label>
                                <input
                                    type="file"
                                    className="text-white  rounded-sm "
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

export default CreateProductoCat;
