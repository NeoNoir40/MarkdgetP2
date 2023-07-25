import React from "react";


function IndicadorPag({TituloIndc,icono}){
    return (
        <h1 className="text-white font-bold text-4xl mt-2"> {icono}{TituloIndc}</h1>
    );
}

export default IndicadorPag