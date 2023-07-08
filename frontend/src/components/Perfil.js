import React from "react";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import profile from "../img/profile.jpg";
import CardPerfil from "./CardPerfil";
import BotonGeneral from "./BontonGeneral";


function Perfil() {
    return (
        <main className="bgmain min-h-screen">
            <div className=" h-24">
                <Encabezado />
            </div>
            <div className="text-center text-white font-bold h-16 mt-16">
                <h1 className="text-4xl">Mi Perfil</h1>
            </div>
            <div className="flex items-center h-40">
                <img src={profile} className=" rounded-3xl w-28 mx-auto block" />
            </div>
            <div className="text-center h-10 text-white font-semibold">
                <p className="text-1xl">Datos Personales</p>
            </div>
            <div className="font-semibold">
                <CardPerfil apartado="Nombre" nombre="Arias Estrella Jomar Alejandro" />
                <CardPerfil apartado="Correo" nombre="eirajomar2003@gmail.com" />
                <CardPerfil apartado="Dirección" nombre="Tierra Maya, Calle Cangrejo, Reg.101, Lt.09, Mz.56" />
                <CardPerfil apartado="C.P." nombre="77532" />
                <CardPerfil apartado="País" nombre="México" />
                <CardPerfil apartado="Estado" nombre="Quintana Roo" />
                <CardPerfil apartado="Fecha de Nacimiento" nombre="21-Junio-2003" />
                <div className="text-center h-10 text-white font-semibold">
                    <p className="text-1xl">Datos de Usuario</p>
                </div>
                <div className="font-semibold">
                    <CardPerfil apartado="Nombre de Usuario" nombre="Jomarcitouwu" />
                    <CardPerfil apartado="Contraseña" nombre="***********" />
                </div>
                <div className="flex flex-row justify-center gap-5">
                    <BotonGeneral link={'/EditarUsuario'} texto="Editar Datos" />
                    <BotonGeneral texto="Log Out" />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default Perfil;