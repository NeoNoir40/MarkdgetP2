import React from "react";
import { Link } from "react-router-dom";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";

function RecuperContraseña(){
    return(
        <main>
        <Encabezado />

        <div className="min-h-screen flex justify-center items-center text-center">

            <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                <h1 className="font-bold text-white "><box-icon name='user' color='#ffffff' ></box-icon>Recuperar cuenta</h1>
                <form action="" method="POST">
                    <div className="text-white flex flex-col">
                    
                        <label htmlFor="nombre">Ingrese su Correo Electrónico</label>
                        <input className="w-80 h-10 rounded-md text-black" type="email" name="nombre" id="nombre" required placeholder="Ejemplo: MK@gmail.com" />
                        
                    </div>
                    <div className="text-[#9B03A8] mt-4">
                        <Link to={'/Registro'}>Registrarse</Link>
                        
                    </div>
                    <BotonGeneral texto={"Confirmar"} />
                </form>
            </div>
        </div>
        <Footer/>
    </main>
    );
}


export default RecuperContraseña;