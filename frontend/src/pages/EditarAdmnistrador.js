import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import IndicadorPag from "../components/PagIndicador";

function EditarAdministrador() {
    return (
        <main>
            <Encabezado />
            <div className="min-h-screen">
                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag
                            TituloIndc={"Modificar  datos de usuario"}
                        />
                    </div>
                    <div className="bg-[#222222] w-[600px] m-auto  rounded-xl  ">
                        <form method="POST">
                            <div className=" flex flex-col  m-auto mt-[100px] p-10 ">
                                <label className="text-white">Nombre Tienda</label>
                                <input placeholder="Ingresa el nombre de la tienda" className=" rounded-sm "></input>
                                <label className="text-white ">Descripcion</label>
                                <input className="h-[100px]  rounded-sm " placeholder="ingresa un descripcion de la tienda"></input>
                                <label className="text-white">Correo electronico</label>
                                <input type="email" placeholder="ingresa su correo electronico" className=" rounded-sm "></input>
                                <label className="text-white">Numero telefonico</label>
                                <input type="tel" placeholder="ingresa su numero telefonico" className=" rounded-sm "></input>
                                <p className="text-[#780072] mt-2">Ingrese su contraseña para realizar los cambios</p>                           
                                <label className="text-white">Contraseña</label>
                                <input type="password" placeholder="ingresa su contraseña" className=" rounded-sm "></input>
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

export default EditarAdministrador;