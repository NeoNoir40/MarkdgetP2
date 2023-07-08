import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardAyuda from "../components/CardAyuda";

function Seguridad(){
    return(
        <>
        <Encabezado/>
        <div className=" min-h-screen">
        <p className=" text-2xl text-fuchsia-700 font-bold mt-10 ml-72">Seguridad</p>
            <CardAyuda
            titulo={"Me robaron la cuenta"}
            enviar={'/RoboCuenta'}
            icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
            />
            <CardAyuda
            titulo={"No reconozco en mi tarjeta bancaria"}
            enviar={'/CargoDesc'}
            icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
            />
            <CardAyuda
            titulo={"Qué hago si pierdo o me roban mim teléfono?"}
            enviar={'/PierdoTelef'}
            icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
            />
        </div>
        <Footer/>
        </>
    );
}

export default Seguridad;
