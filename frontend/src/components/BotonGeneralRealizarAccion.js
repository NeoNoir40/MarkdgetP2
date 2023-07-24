import React from "react";


function BotonGeneralRealizarAccion({texto, onClick}){

    return(

        

        <div className="flex justify-center">
        <button  className="bg-fuchsia-900 rounded-md mt-4 text-white mb-3 py-2 px-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl " onClick={onClick}>{texto}</button>
    </div> 
 
    );
}  
export default BotonGeneralRealizarAccion;