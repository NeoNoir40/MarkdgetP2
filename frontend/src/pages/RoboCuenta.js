import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonSec from "../components/BotonSecun";


function RoboCuenta() {
    return (
        <>
            <Encabezado />
            <div className=" min-h-screen">
                <p className=" text-2xl text-fuchsia-700 font-bold m-5 mt-10 ml-80">Me robaron la cuenta</p>
                <div className=" ml-80">
                    <div className="bg-[#ffffff] w-[600px] h-[300px] rounded-2xl">
                        <p className=" text-black p-5 text-2xl">
                            Si sospechas que alguien está usando
                            tu cuenta sin tu permiso, reporta el
                            robo de tu cuenta para que podamos tomar
                            medidas de seguridad de inmediato y analizar lo que pasó.</p>
                    </div>
                    <p className=" mt-5 text-fuchsia-700 text-2xl font-bold"> Te resultó útil?</p>
                    <div className=" flex flex-row">
                        <div className=" ml-5">
                    <BotonSec
                    texto={"Si"}
                    /></div>
                    <div className=" ml-7 w-5">
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

export default RoboCuenta;