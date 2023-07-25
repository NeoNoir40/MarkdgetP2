import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import mercado_pago from "../img/mercado_pago.png";
import paypal from "../img/paypal.png";


function Pasarela_pago() {
    return (
        <div>
            <Encabezado />
            <div className=" min-h-screen">
                <div className=" text-center text-5xl h-20 text-fuchsia-700 gap-14 font-bold mt-10">
                    <h1>Elige metodo de pago</h1>
                </div>
                
            <div className="flex justify-center items-center mt-1 h-800 ">
                <img className="w-80 p-5 mr-10  " src={mercado_pago} alt="" />
                <img className="mx-5 mr-10 rounded-2xl" src={paypal} alt="" />
            </div>
            
            </div>
            <Footer />
        </div>
    );
}

export default Pasarela_pago;