import React from "react";


import CardVistaProdu from "../components/CardVistaProd";
import imagen1 from '../img/car1.png';

function VistaCanRem(){
    return(
        <>
        
        <div className=" min-h-screen">
        <CardVistaProdu
        imagen={imagen1}
        titulo={"20 de febrero"}
        descripcion={"Audifonos rosa, Razer, rosa, 100"}
        enviar1={'/VistaProducto'}
        enviar2={''}
        />
        <CardVistaProdu
        imagen={imagen1}
        titulo={"20 de febrero"}
        descripcion={"Audifonos rosa, Razer, rosa, 100"}
        enviar1={'/VistaProducto'}
        enviar2={''}
        />
        <CardVistaProdu
        imagen={imagen1}
        titulo={"20 de febrero"}
        descripcion={"Audifonos rosa, Razer, rosa, 100"}
        enviar1={'/VistaProducto'}
        enviar2={''}
        />
        <CardVistaProdu
        imagen={imagen1}
        titulo={"20 de febrero"}
        descripcion={"Audifonos rosa, Razer, rosa, 100"}
        enviar1={'/VistaProducto'}
        enviar2={''}
        />
        <CardVistaProdu
        imagen={imagen1}
        titulo={"20 de febrero"}
        descripcion={"Audifonos rosa, Razer, rosa, 100"}
        enviar1={'/VistaProducto'}
        enviar2={''}
        />
        <CardVistaProdu
        imagen={imagen1}
        titulo={"20 de febrero"}
        descripcion={"Audifonos rosa, Razer, rosa, 100"}
        enviar1={'/VistaProducto'}
        enviar2={''}
        />
        </div>
        
        </>
    );
}

export default VistaCanRem;