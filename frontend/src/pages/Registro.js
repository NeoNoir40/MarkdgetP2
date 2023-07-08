import React from "react";
import { Link } from "react-router-dom";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";

function Registro() {
    return (
        <main>
            <Encabezado />

            <div className="min-h-screen flex justify-center items-center text-center">

                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><box-icon name='user' color='#ffffff' ></box-icon>Registro</h1>
                    <form action="" method="POST">
                        <div className="text-white flex flex-col ">

                            <label for="nombre" className="mt-5">Nombre</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" name="nombre" id="nombre" required placeholder="Ejemplo: MK@gmail.com" />


                            <label for="correo" className="mt-5 ">Correo Electrónico</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" name="nombre" id="nombre" required placeholder="Ejemplo: MK@gmail.com" />

                            <label for="confirmar correo " className="mt-5 " >Confirmar Correo</label>
                            <input className="w-80 h-10 rounded-md text-black " type="email" name="nombre" id="nombre" required placeholder="Ejemplo: MK@gmail.com" />

                            <label for="confirmar contraseña" className="mt-5 ">Contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="password" name="password" id="passwrd" required placeholder="Contraseña" />

                            <label for="confirmar contraseña" className="mt-5 ">Confirmar contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="password" name="password" id="passwrd" required placeholder="Contraseña" />

                        </div>
                        <div className="text-[#9B03A8] mt-4">
                        </div>
                        <BotonGeneral texto={"Confirmar registro"} />
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Registro;