



import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";

function Registro() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signupVenedor, isAuthenticatedVendedor, errors: registerVendedorSchema } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticatedVendedor) navigate("/AdministrarVendedores")
    }, [isAuthenticatedVendedor, navigate]);

    const onSubmit = handleSubmit(async (values) => {
        await signupVenedor(values)
    })

    return (
        <main>



            <div className="min-h-screen flex justify-center items-center text-center">

                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><box-icon name='user' color='#ffffff' ></box-icon>Registro</h1>
                    {
                        registerVendedorSchema.map((error, i) => (
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
                            <label className="mt-5">Descripcion</label>
                            <input
                                className="w-80 h-16 resize-y rounded-md text-black"
                                type="text"
                                placeholder="Ejemplo: una descripcion breve maximo 1000 caracteres"
                                {...register('descripcion')}
                            />

                        </div>
                        <div className="text-[#9B03A8] mt-4">
                        </div>
                        <BotonGeneralRealizarAccion texto={"Registrarse"} type="submit" />
                    </form>
                </div>
            </div>

        </main>
    );
}

export default Registro;