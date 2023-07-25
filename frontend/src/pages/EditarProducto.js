import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import IndicadorPag from "../components/PagIndicador";

function EditarProducto() {
    return (

        <main>
            <Encabezado />
            <div className="min-h-screen">

                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag
                            TituloIndc={"Modificar Producto"}
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
                                <input type="number" placeholder="ingresa el precio" className=" rounded-sm "></input>
                                <label className="text-white">  Categorias</label>
                                <select name="categorias">
                                    <option>Computdoras</option>
                                    <option>Celulares</option>
                                    <option>Hardware</option>
                                </select>
                                <label className="text-white">Imagen</label>
                                <input type="file" className="text-white  rounded-sm "></input>
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

export default EditarProducto;