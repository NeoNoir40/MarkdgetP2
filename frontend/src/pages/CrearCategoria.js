import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import IndicadorPag from "../components/PagIndicador";
import { useState } from "react";
import axios from "axios";

function CrearCategoria() {

const [nombre,setNombre] = useState("")
const [imagen,setImagen] = useState(null)

    const addCategoria=()=>{
        axios.post("http://localhost:3001/api/categorias",{
            nombre:nombre,
            imagen:imagen
        }).then(()=>{
            alert("Categoria registrada");
        });
    }

    return (

        <main>
            <Encabezado />
            <div className="min-h-screen">
                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag
                            TituloIndc={"Crear nuevo producto"}
                        />
                    </div>
                    <div className="bg-[#222222] w-[600px] m-auto  rounded-xl  ">
                        <form method="POST">
                            <div className=" flex flex-col  m-auto mt-[100px] p-10 ">
                                <label className="text-white">Categoria</label>
                                <input placeholder="Ingresa el nombre de la categoria" className=" rounded-sm " name="nombre"
                                
                                onChange={(event) => {

                                    setNombre(event.target.value);
                                }}
                                
                                />

                                <label className="text-white ">Descripcion</label>
                                <input  type="file" name="imagen_categoria" className="  rounded-sm " placeholder="ingresa un descripcion del producto"
                                
                                onChange={(event) => {

                                    setImagen(event.target.files[0]);
                                }}

                                />

                                <BotonGeneral texto={"Enviar"} funcion={addCategoria} link={''}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );

}

export default CrearCategoria;