import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardAyuda from "../components/CardAyuda";
import IndicadorPag from "../components/PagIndicador";

function ConfiCuenta(){
    return(
        <>
        <Encabezado/>
        <div className=" min-h-screen">

        <div className="text-center mt-5 mb-7">
        <IndicadorPag
        TituloIndc={"Configuracion de la cuenta"}
        />
        </div>
        <div className="flex flex-col justify-center mt-10" >
        <CardAyuda
        titulo={"Recuperar mi contraseña"}
        enviar={'/RecuperContraseña'}
        icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
        
        />
        <CardAyuda
        titulo={"Cambiar correo electronico"}
        enviar={'/CamCorreo'}
        icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
        />
        <CardAyuda
        titulo={"Salir de mi cuenta"}
        enviar={'/SalirCuenta'}
        icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
        
        />
        </div>
        </div>
        <Footer/>
        </>
    );
}

export default ConfiCuenta;