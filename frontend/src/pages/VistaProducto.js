import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import ImagenVistaProducto from "../components/ImagneVistaProducto";
import imagen from '../img/hardware.png';
import VistaProductoPrincipal from "../components/VistaProductoPrincipal";
import DescripcionProductos from "../components/DescripcionProductos";
import BotonPagarEstatic from "../components/BotonPagarEstic";

function VistaProducto({ TituloDescProducto, marca, color, descripcion }) {
    return (
        <div className="  ">
            <Encabezado />
            <div className=" min-h-screen">

                <div className="  w-[1480px] h-[1000px]  ml-[250px] m-auto mt-10 flex  justify-center items-center">

                    <div className="flex flex-row mr-20  ">
                        <ImagenVistaProducto
                            imagen={imagen}
                            imagen1={imagen}
                            imagen2={imagen}
                        />
                    </div>

                    <div className="flex-col flex  ">


                        <VistaProductoPrincipal
                            imagen={imagen}
                        />

                        <div>
                            <DescripcionProductos

                                TituloDescProducto={"Procesador Ryzen 5 5900x"}
                                marca={"AMD"}
                                color={""}
                                descripcion={" 'Clave en el rendimiento de tu computadora de escritorio, ya no tienes que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.'  "}
                            />
                        </div>

                    </div>
                    <div >
                        <BotonPagarEstatic />

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default VistaProducto;

