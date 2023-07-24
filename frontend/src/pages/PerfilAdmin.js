import React, { useState, useEffect } from "react";
import {  viewProfileAdmin } from "../api/auth"; // Importa la función viewProfileAdmin desde tu archivo api/auth
import { useAuth } from "../context/AuthContext";
import BotonGeneral from '../components/BontonGeneral'
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
function PerfilAdmin() {
    const [administradorData, setAdministradorData] = useState(null);
    const {logoutAdmin} = useAuth();
    useEffect(() => {
        const fetchAdministradorData = async () => {
            try {
                const response = await viewProfileAdmin(); // Llama a la función viewProfileAdmin para obtener los datos del administrador autenticado
                setAdministradorData(response.data); // Almacena los datos del administrador en el estado
            } catch (error) {
                console.error("Error al obtener los datos del administrador", error);
            }
        };

        fetchAdministradorData();
    }, []);

    return (
        <main>
            <div className="min-h-screen">
                <div className="text-center bottom-0 text-5xl h-1 p-6 text-fuchsia-700 font-bold mt-10">
                    <h1>Admin</h1>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-[#ffffff] m-10 ml-5 w-[100] h-96 rounded-2xl">
                        {administradorData && (
                            <>
                                <div className="text-center">
                                    <h1 className="text-fuchsia-700 text-3xl ml-10 mt-5">Dashboard</h1>
                                    <p className="text-lg ml-5">
                                        <span className="text-fuchsia-700">
                                            <br />Nombre:{" "}
                                        </span>
                                        <span>{administradorData.nombre}</span>
                                    </p>
                                    <p className="text-lg ml-5">
                                        <span className="text-fuchsia-700">
                                            <br />Correo electrónico:{" "}
                                        </span>
                                        <span className="mr-5">{administradorData.email}</span>
                                    </p>
                                </div>
                                <div className="flex flex-row justify-center ">
                                    <div className="m-3">
                                        <BotonGeneral texto={"Administrar Usuarios"} link={"/Usuarios"} />
                                    </div>

                                    <div className="m-3">
                                        <BotonGeneral texto={"Administrar Vendedores"} link={"/AdministrarVendedores"} />
                                    </div>

                                    <div className="m-3">
                                        <BotonGeneral texto={"Administrar Categorias"} link={"/CategoriasAdmin"} />
                                    </div>

                                    <div className="m-3">
                                        <BotonGeneral texto={"Administrar productos"} link={"/AdminProd"} />
                                    </div>

                                    <div className="m-3">
                                        <BotonGeneral texto={"Administrar productos categoria"} link={"/CategoriaProd"} />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex flex-row justify-center ">
                <div className="m-3">
                    <BotonGeneralRealizarAccion texto={"Cerrar Session"} onClick={logoutAdmin} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PerfilAdmin;


