import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardVistaProdu from "../components/CardVistaProd";
import imagen1 from '../img/car1.png';

function VistaCanRem(){
    return(
        <>
        <Encabezado/>
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
        <Footer/>
        </>
    );
}

export default VistaCanRem;