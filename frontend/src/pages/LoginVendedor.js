import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import { BiUser } from "react-icons/bi";

function LoginVendedor() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signinVendedor, isAuthenticatedVendedor, errors: signinVendedorErrors } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        try {
            // Iniciar sesión como vendedor
            await signinVendedor(data);
            console.log("Inicio de sesión correcto como vendedor", data);
            // Si el inicio de sesión fue exitoso, el vendedor será redirigido automáticamente en useEffect
        } catch (error) {
            console.log("No se puede iniciar sesión como vendedor", error);
            // Mostrar mensaje de error o manejarlo de acuerdo a tus necesidades
        }
    });

    useEffect(() => {
        if (isAuthenticatedVendedor) {
            // Si el usuario es un vendedor, redirigir a la ruta para vendedores
            navigate("/PerfilVendedor");
        }
    }, [isAuthenticatedVendedor, navigate]);

    return (
        <main>
            <div className="min-h-screen flex justify-center items-center text-center">
                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><BiUser />Iniciar Sesión como Vendedor</h1>
                    {signinVendedorErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))}
                    <form onSubmit={onSubmit}>
                        <div className="text-white flex flex-col">
                            <label>Correo Electrónico</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" placeholder="Ejemplo: vendedor@example.com" {...register('email', { required: true })} />
                            {errors.email && (
                                <p className="text-red-500 mt-5">Email Requerido!</p>
                            )}
                            <label>Contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="password" placeholder="Contraseña" {...register('contrasena', { required: true })} />
                            {errors.contrasena && (
                                <p className="text-red-500 mt-5">Contraseña Requerida!</p>
                            )}
                        </div>
                        <BotonGeneralRealizarAccion texto={"Iniciar sesión como Vendedor"} />
                        <div className="text-[#9B03A8]  text-center hover:scale-105 transition-all hover:contrast-125 hover:shadow-1xs">
                            <Link to={'/Login'}>Iniciar sesion cliente</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default LoginVendedor;
