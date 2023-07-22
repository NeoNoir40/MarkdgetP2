import React from "react";


import BotonSec from "../components/BotonSecun";

function SalirCuenta(){
    return(
        <main>
        

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
       
    </main>
    );
}
export default SalirCuenta;