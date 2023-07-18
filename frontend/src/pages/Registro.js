
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {

    const { register, handleSubmit, formState:{errors} } = useForm();
    const {signup , isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

useEffect(() => {
if (isAuthenticated) navigate("/Login")
},[isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
      await signup(values)
    })

    return (
        <main>

            <Encabezado />

            <div className="min-h-screen flex justify-center items-center text-center">

                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><box-icon name='user' color='#ffffff' ></box-icon>Registro</h1>
                    {
                        registerErrors.map((error, i ) => (
                            <div className="bg-red-500 p-2 text-white">
                                {error}
                            </div>
                        ))
                    }
                    <form onSubmit={onSubmit}
                    >

                        <div className="text-white flex flex-col ">

                            <label className="mt-5">Nombre</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: MK@gmail.com"
                                {...register('nombre', { required: true, })}
                            />
                            {
                                errors.nombre && (
                                    <p className="text-red-500 mt-5">Usuario Requerido!</p>
                                )
                            }
                            <label className="mt-5 ">Correo Electrónico</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" placeholder="Ejemplo: MK@gmail.com"
                                {...register('email', { required: true })}
                            />
                            {
                                errors.email && (
                                    <p className="text-red-500 mt-5">Email Requerido!</p>
                                )
                            }
                            <label className="mt-5 ">Contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="password" placeholder="Contraseña"
                                {...register('contrasena', { required: true })}
                            />
                            {
                                errors.contrasena && (
                                    <p className="text-red-500 mt-5">Contraseña Requerido!</p>
                                )
                            }
                            <label className="mt-5 ">Dirección</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: calle: luna , mz0, cp1000"
                                {...register('direccion', { required: true })}
                            />
{
                                errors.direccion && (
                                    <p className="text-red-500 mt-5">Dirección Requerido!</p>
                                )
                            }
                            <label className="mt-5 ">Ciudad</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: Merida"
                                {...register('ciudad', { required: true })}
                            />
{
                                errors.ciudad && (
                                    <p className="text-red-500 mt-5">Ciudad Requerido!</p>
                                )
                            }
                            <label className="mt-5 ">Estado</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: Yucatan"
                                {...register('estado', { required: true })}
                            />
{
                                errors.estado && (
                                    <p className="text-red-500 mt-5">Estado Requerido!</p>
                                )
                            }

                            <label className="mt-5 ">Pais</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" placeholder="Ejemplo: Mexico"
                                {...register('pais', { required: true })}
                            />
                            {
                                errors.pais && (
                                    <p className="text-red-500 mt-5">Pais Requerido!</p>
                                )
                            }
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