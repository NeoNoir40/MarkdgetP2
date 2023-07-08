import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonSec from "../components/BotonSecun";

function PierdoTelef() {
    return (
        <>
            <Encabezado />
            <div className=" min-h-screen">
                <p className=" text-2xl text-fuchsia-700 font-bold m-5 mt-20 ml-80">Si pierdo mi teléfono</p>
                <div className=" ml-80">
                    <div className="bg-[#ffffff] w-[600px] h-[200px] rounded-2xl">
                        <p className=" text-black p-5 text-2xl">
                            Para proteger tu cuenta, repórtanos la pérdida o el robo de tu teléfono
                            así cerramos tus sesiones y eliminamos todos tus dispositivos vinculados.
                        </p>
                    </div>
                    <p className=" mt-5 text-fuchsia-700 text-2xl font-bold"> Te resultó útil?</p>
                    <div className=" flex flex-row">
                        <div className=" ml-5">
                            <BotonSec
                                texto={"Si"}
                            /></div>
                        <div className=" ml-7">
                            <BotonSec
                                texto={"No"}
                            /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PierdoTelef;