import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import axios from "axios";

function Login() {



    const [email, setEmail] = useState("");
    const [contraseña, setContrasena] = useState("");

    const loginUser = () => {
        
        axios.post(`http://localhost:3001/api/clientes/login`,{
            email:email,
            contrasena:contraseña
        }).then(()=>{
            alert("Logeado correctamente")
            window.location.href = "/";
        }).catch((error)=>{
            if(error.response && error.response.status === 401){
                alert("Contraseña incorrecta, porfavor intentalo de nuevo.")
            }else{
                alert("Ocurrio un error")
            }  
        })      
    };
    






    return (
        <main>
            <Encabezado />
            <div className="min-h-screen flex justify-center items-center text-center">

                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><box-icon name='user' color='#ffffff' ></box-icon>Iniciar Sesion</h1>
                    <form action="" method="POST">
                        <div className="text-white flex flex-col">
                            <label htmlFor="nombre">Correo Electrónico</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" name="email" id="nombre" required placeholder="Ejemplo: MK@gmail.com"
                            
                            onChange={(event) => {

                                setEmail(event.target.value);
                            }}
                            />
                            <label htmlFor="contraseña">Contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="contrasena" name="contrasena" id="passwrd" required placeholder="Contraseña" 
                            onChange={(event) => {

                                setContrasena(event.target.value);
                            }}

                            />
                        </div>
                        <div className="text-[#9B03A8] mt-4">
                            <Link to={'/Registro'}>Registrarse</Link>
                            <Link className="ml-4" to={'/RecuperContraseña'}>Olvidó su contraseña</Link>
                        </div>
                        <BotonGeneral texto={"Inciar session"} funcion={loginUser} />
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Login;