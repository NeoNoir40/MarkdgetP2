import React, { useState } from "react";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import IndicadorPag from "../components/PagIndicador";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CrearProducto() {

    const navigate = useNavigate();
    const { newCategoria } = useAuth();
    const [ categoriasDatos, setCategoriaDatos ] = useState({
        nombre: "",
        imagen_categoria: null,
        
    });



    const HandleChange = (e) => {
        const { name, value } = e.target;
        setCategoriaDatos({
            ...categoriasDatos,
            [name]: value,
        })
    }



    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            await newCategoria(categoriasDatos);
            alert("Producto creado correctamente");
            console.log(categoriasDatos);
            navigate("/CategoriasAdmin");
        } catch (error) {
            alert("Producto creado correctamente", error);
            console.error("Error al crear la categoria ", error);

        }
    }

    return (

        <main>

            <div className="min-h-screen">
                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag
                            TituloIndc={"Crear nuevo producto"}
                        />
                    </div>
                    <div className="bg-[#222222] w-[600px] m-auto  rounded-xl  ">
                        <form onSubmit={handleSumit}>
                            <div className=" flex flex-col  m-auto mt-[100px] p-10 ">

                                <label className="text-white">Nombre</label>
                                <input placeholder="Ingresa el nombre de tu producto" className=" rounded-sm "
                                    name="nombre"


                                    value={categoriasDatos.nombre}
                                    onChange={HandleChange}
                                />

                                {/*<label className="text-white">  Categorias</label>  <input className=" rounded-sm " placeholder="ingresa la categoria del producto" name=""></input>/*/}


                                <label className="text-white">Imagen</label>
                                <input type="file" className="text-white  rounded-sm "
                                    name="imagen_categoria"



                                    value={categoriasDatos.imagen_categoria}
                                    onChange={HandleChange}

                                />

                                <BotonGeneralRealizarAccion texto={"Enviar"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    );

}

export default CrearProducto;