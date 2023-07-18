import React from "react";
import { Link } from "react-router-dom";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import {useForm} from 'react-hook-form'

function Login() {


    const {register, handleSubmit, formState :{errors}} =  useForm()
    const onSubmit = handleSubmit(data =>{
        console.log(data)
    } )


    return (
        <main>
            <Encabezado />
            <div className="min-h-screen flex justify-center items-center text-center">

                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><box-icon name='user' color='#ffffff' ></box-icon>Iniciar Sesion</h1>
                    {
                        registerErrors.map((error, i ) => (
                            <div className="bg-red-500 p-2 text-white">
                                {error}
                            </div>
                        ))
                    }
                     <form onSubmit={onSubmit}
                    >
                        <div className="text-white flex flex-col">

                            <label >Correo Electrónico</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" placeholder="Ejemplo: MK@gmail.com"
                              {...register('email', { required: true })}
                           
                            />

{
                                errors.email && (
                                    <p className="text-red-500 mt-5">Email Requerido!</p>
                                )
                            }

                            <label>Contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="password" placeholder="Contraseña" 
                           
                           {...register('contrasena', { required: true })}

                            />

{
                                errors.contrasena && (
                                    <p className="text-red-500 mt-5">Contraseña Requerido!</p>
                                )
                            }   

                        </div>
                        <div className="text-[#9B03A8] mt-4">
                            <Link to={'/Registro'}>Registrarse</Link>
                            <Link className="ml-4" to={'/RecuperContraseña'}>Olvidó su contraseña</Link>
                        </div>
                        <button></button>
                        <BotonGeneral texto={"Inciar session"} />
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Login;