import React, { useState, useEffect } from "react";
import profile from "../img/profile.jpg";
import CardPerfil from "../components/CardPerfil";
import { viewProfile } from "../api/auth";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function Perfil() {
    const [clienteData, setClienteData] = useState(null);
    const { logout } = useAuth();
    const navigate = useNavigate(); // Inicializa useNavigate

    useEffect(() => {
        const fetchClienteData = async () => {
            try {
                const response = await viewProfile();
                setClienteData(response.data);
            } catch (error) {
                console.error("Error al obtener los datos del cliente", error);
            }
        };

        fetchClienteData();
    }, []);

    // Función para redirigir al componente EditarUsuario con el ID del cliente en la URL
    const handleEditClick = () => {
        navigate(`/EditarUsuarioCliente?id=${clienteData.id_cliente}`);
    };

    return (
        <main className="bgmain min-h-screen">
            <div className=" h-24">

            </div>
            <div className="text-center text-white font-bold h-16 mt-16">
                <h1 className="text-4xl">Mi Perfil</h1>
            </div>
            <div className="flex items-center h-40">
                <img src={profile} alt="" className=" rounded-3xl w-28 mx-auto block" />
            </div>
            <div className="text-center h-10 text-white font-semibold">
                <p className="text-1xl">Datos Personales</p>
            </div>
            <div className="font-semibold">
                <CardPerfil apartado="Nombre" nombre={clienteData?.nombre} />
                <CardPerfil apartado="Correo" nombre={clienteData?.email} />
                <CardPerfil apartado="Dirección" nombre={clienteData?.direccion} />
                <CardPerfil apartado="Ciudad" nombre={clienteData?.ciudad} />
                <CardPerfil apartado="País" nombre={clienteData?.pais} />
                <CardPerfil apartado="Estado" nombre={clienteData?.estado} />
                <div className="flex flex-row justify-center gap-5">
                    <BotonGeneralRealizarAccion texto="Editar Datos" onClick={handleEditClick} disabled={!clienteData}
                    />
                    <BotonGeneralRealizarAccion texto="Cerrar Session" onClick={logout} />
                </div>
            </div>
        </main>
    )
}

export default Perfil;