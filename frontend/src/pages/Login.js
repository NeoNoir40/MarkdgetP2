import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import { BiSolidUser } from "react-icons/bi";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, isAuthenticated, errors: signinErrors } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        try {
            // Iniciar sesión como usuario normal
            await signin(data);

            // Si el inicio de sesión fue exitoso, el usuario será redirigido automáticamente en useEffect
        } catch (error) {
            console.log(error);
            // Mostrar mensaje de error o manejarlo de acuerdo a tus necesidades
        }
    });

    useEffect(() => {
        if (isAuthenticated) {
            // Si el usuario es un usuario normal, redirigir a la ruta para usuarios normales
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <main>
            <div className="min-h-screen flex justify-center items-center text-center">
                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><BiSolidUser/>Iniciar Sesion</h1>
                    {signinErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))}
                    <form onSubmit={onSubmit}>
                        <div className="text-white flex flex-col">
                            <label>Correo Electrónico</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" placeholder="Ejemplo: MK@gmail.com" {...register('email', { required: true })} />
                            {errors.email && (
                                <p className="text-red-500 mt-5">Email Requerido!</p>
                            )}
                            <label>Contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="password" placeholder="Contraseña" {...register('contrasena', { required: true })} />
                            {errors.contrasena && (
                                <p className="text-red-500 mt-5">Contraseña Requerido!</p>
                            )}
                        </div>
                        <div className="text-[#9B03A8] mt-4">
                            <Link to={'/Registro'}>Registrarse</Link>
                            <Link className="ml-4" to={'/RecuperContraseña'}>Olvidó su contraseña</Link>
                        </div>
                        <BotonGeneralRealizarAccion texto={"Inciar session"} />
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;
