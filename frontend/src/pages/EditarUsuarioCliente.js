import React, { useState, useEffect } from "react";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import { useLocation, useNavigate } from "react-router-dom";
import { viewClientePorId } from "../api/auth"; // Asegúrate de importar la función adecuada para obtener la información del cliente
import axios from "axios";

function EditarClienteUsuario() {
    const navigate = useNavigate();
    const location = useLocation();
    const idCliente = new URLSearchParams(location.search).get("id");
    const [clienteDatos, setClienteDatos] = useState({
        nombre: "",
        email: "",
        contrasena: "",
        id_cliente: "",
        direccion: "",
        ciudad: "",
        estado: "",
    });

    const cargarClienteDatosPorId = async (id) => {
        try {
            const cliente = await viewClientePorId(id);
            setClienteDatos(cliente); // Set cliente info to state
        } catch (error) {
            console.error("Error al cargar el cliente", error);
        }
    };

    useEffect(() => {
        cargarClienteDatosPorId(idCliente);
    }, [idCliente]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClienteDatos({
            ...clienteDatos,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send updated data to the API
            await axios.patch(
                `http://localhost:3001/api/clientes/${idCliente}`,
                clienteDatos
            );
            alert("Cliente actualizado correctamente");
            navigate("/Perfil");
        } catch (error) {
            console.error("Error updating cliente info", error);
        }
    };

    return (
        <main>
            <div className="min-h-screen flex justify-center items-center text-center">
                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white ">
                        <box-icon name="user" color="#ffffff"></box-icon>Editar Cliente
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="text-white flex flex-col">
                            <label className="mt-5">Nombre</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="text"
                                placeholder="Nombre del cliente"
                                name="nombre"
                                value={clienteDatos.nombre || ""} // Handle initial state
                                onChange={handleInputChange}
                            />
                            <label className="mt-5">Correo Electrónico</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="email"
                                placeholder="Correo electrónico"
                                name="email"
                                value={clienteDatos.email || ""} // Handle initial state
                                onChange={handleInputChange}
                            />
                            <label className="mt-5">Contraseña</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="password"
                                placeholder="Contraseña"
                                name="contrasena"
                                value={null} // Handle initial state
                                onChange={handleInputChange}
                            />

                            <label className="mt-5">Dirección</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="text"
                                placeholder="Dirección"
                                name="direccion"
                                value={clienteDatos.direccion || ""} // Handle initial state
                                onChange={handleInputChange}
                            />
                            <label className="mt-5">Ciudad</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="text"
                                placeholder="Ciudad"
                                name="ciudad"
                                value={clienteDatos.ciudad || ""} // Handle initial state
                                onChange={handleInputChange}
                            />
                            <label className="mt-5">Estado</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="text"
                                placeholder="Estado"
                                name="estado"
                                value={clienteDatos.estado || ""} // Handle initial state
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-[#9B03A8] mt-4"></div>
                        <BotonGeneralRealizarAccion texto={"Guardar Cambios"} type="submit" />
                    </form>
                </div>
            </div>
        </main>
    );
}

export default EditarClienteUsuario;
