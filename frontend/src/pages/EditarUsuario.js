import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import IndicadorPag from "../components/PagIndicador";

function EditarUsuario() {
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
                                <label className="text-white">Nombre</label>
                                <input placeholder="Ingresa el nombre de tu producto" className=" rounded-sm "></input>

                                <label className="text-white ">Correo Electronico</label>
                                <input type="email" className=" rounded-sm " placeholder="correo electronico"></input>

                                <label className="text-white">CP</label>
                                <input type="text" placeholder="ingresa su codigo postal" className=" rounded-sm "></input>

                                <label className="text-white">Pais</label>
                                <input type="text" placeholder="ingrese su pais" className=" rounded-sm "></input>

                                <label className="text-white">Estado</label>
                                <input type="text" placeholder="ingresa su estado" className=" rounded-sm "></input>

                                <label className="text-white">Fecha de Nacimiento</label>
                                <input type="date" placeholder="" className=" rounded-sm "></input>

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

export default EditarUsuario;