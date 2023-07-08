import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonSec from "../components/BotonSecun";

function SalirCuenta(){
    return(
        <main>
        <Encabezado />

        <div className="min-h-screen flex justify-center items-center text-center">

            <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                <h1 className="font-bold text-white ">Quieres salir de la cuenta?</h1>
                <form action="" method="POST">
                    <div className="text-[#9B03A8] flex flex-col">
                    
                    <BotonSec texto={"Si"} />
                    <BotonSec texto={"No"} />
                        
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </main>
    );
}
export default SalirCuenta;