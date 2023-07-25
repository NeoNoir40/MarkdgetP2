import React, { useState, useEffect } from "react";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import { useLocation, useNavigate } from "react-router-dom";
import { viewVendedorPorId } from "../api/auth";
import axios from "axios";

function EditarVendedorDefault() {
    const navigate = useNavigate();
    const location = useLocation();
    const IdVendedor = new URLSearchParams(location.search).get("id");
    const [vendedorDatos, setVendedorDatos] = useState({
        nombre: "",
        email: "",
        descripcion: "",
        contrasena: "",
    });

    const cargarVendedorDatosId = async (id) => {
        try {
            const vendedor = await viewVendedorPorId(id);
            setVendedorDatos(vendedor); // Set vendedor info to state
        } catch (error) {
            console.error("Error al cargar el vendedor", error);
        }
    };

    useEffect(() => {
        cargarVendedorDatosId(IdVendedor);
    }, [IdVendedor]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVendedorDatos({
            ...vendedorDatos,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send updated data to the API
            await axios.patch(
                `http://localhost:3001/api/vendedor/${IdVendedor}`,
                vendedorDatos
            );
            alert("Vendedor actualizado correctamente");
            navigate("/PerfilVendedor");
        } catch (error) {
            console.error("Error updating vendedor info", error);
        }
    };

    return (
        <main>
            <div className="min-h-screen flex justify-center items-center text-center">
                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white ">
                        <box-icon name="user" color="#ffffff"></box-icon>Editar Vendedor
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="text-white flex flex-col ">
                            <label className="mt-5">NombreEEEEE</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="text"
                                placeholder="Ejemplo: MK@gmail.com"
                                name="nombre"
                                value={vendedorDatos.nombre || ""} // Handle initial state
                                onChange={handleInputChange}
                            />
                            <label className="mt-5">Correo Electrónico</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="email"
                                placeholder="Ejemplo: MK@gmail.com"
                                name="email"
                                value={vendedorDatos.email || ""} // Handle initial state
                                onChange={handleInputChange}
                            />
                            <label className="mt-5">Dirección</label>
                            <input
                                className="w-80 h-10 rounded-md text-black"
                                type="text"
                                placeholder="Ejemplo: calle: luna , mz0, cp1000"
                                name="descripcion"
                                value={vendedorDatos.descripcion || ""} // Handle initial state
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

export default EditarVendedorDefault;
