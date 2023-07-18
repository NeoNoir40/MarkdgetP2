import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth'



function Registro() {

    const { register, handleSubmit } = useForm()

    return (
        <main>

            <Encabezado />

            <div className="min-h-screen flex justify-center items-center text-center">

                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><box-icon name='user' color='#ffffff' ></box-icon>Registro</h1>

                    <form onSubmit={handleSubmit(async (values) => {
                        console.log(values);
                        const res = await registerRequest(values)
                        console.log(res)
                    })}>

                        <div className="text-white flex flex-col ">

                            <label className="mt-5">Nombre</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: MK@gmail.com"
                                {...register('nombre', { required: true, })}
                            />

                            <label className="mt-5 ">Correo Electrónico</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" placeholder="Ejemplo: MK@gmail.com"
                                {...register('email', { required: true })}
                            />
                            <label className="mt-5 ">Contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="password" placeholder="Contraseña"
                                {...register('contrasena', { required: true })}
                            />
                            <label className="mt-5 ">Dirección</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: calle: luna , mz0, cp1000"
                                {...register('direccion', { required: true })}
                            />

                            <label className="mt-5 ">Ciudad</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: Merida"
                                {...register('ciudad', { required: true })}
                            />

                            <label className="mt-5 ">Estado</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: Yucatan"
                                {...register('estado', { required: true })}
                            />


                            <label className="mt-5 ">Pais</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: Mexico"
                                {...register('pais', { required: true })}
                            />
                        </div>
                        <div className="text-[#9B03A8] mt-4">
                        </div>
                        <button type="submit"> enviar</button>

                        <BotonGeneral texto={"Confirmar registro"} type="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Registro;