import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import IndicadorPag from "../components/PagIndicador";
import { useState } from "react";

function CrearProducto() {

const addProducto = () =>{
    Axios.post("http://localhost:3001/api/productos" ,{

    })
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
                                <label className="text-white">Nombre</label>
                                <input placeholder="Ingresa el nombre de tu producto" className=" rounded-sm "></input>

                                <label className="text-white ">Descripcion</label>
                                <input className="h-[100px]  rounded-sm " placeholder="ingresa un descripcion del producto"></input>

                                <label className="text-white">Precio</label>
                                <input type="number" placeholder="ingresa el precio" className=" rounded-sm" name="" ></input>

                                <label className="text-white">  Categorias</label>
                                <input className=" rounded-sm " placeholder="ingresa la categoria del producto" name=""></input>

                                <label className="text-white">Imagen</label>
                                <input type="file" className="text-white  rounded-sm " name="imagen"></input>
                                
                                <BotonGeneral texto={"Enviar"} tipo={"submit"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );

}

export default CrearProducto;