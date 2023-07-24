import React, { useEffect, useState } from "react";
import BotonGeneral from "../components/BontonGeneral";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { viewProfileVendedor, ContarProductosVendedor } from "../api/auth"; // Importa la función viewProfileVendedor desde tu archivo api/auth
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";



function PerfilVendedor() {
    const [vendedorData, setVendedorData] = useState(null);
    const [cantidadProductos, setCantidadProductos] = useState(null);
    const navigate = useNavigate();
    const { logoutVendedor } = useAuth();

    useEffect(() => {
        const fetchVendedorData = async () => {
            try {
                const response = await viewProfileVendedor();
                setVendedorData(response.data);

                // Llama a la función ContarProductosVendedor para obtener la cantidad de productos del vendedor autenticado
                const cantidadProductos = await ContarProductosVendedor(response.data.id_vendedor);
                setCantidadProductos(cantidadProductos.cantidad_productos); // Accedemos al campo 'cantidad_productos' del resultado
            } catch (error) {
                console.error("Error al obtener los datos del vendedor", error);
            }
        };
        fetchVendedorData();
    }, []);

    const handleEditClick = () => {
        navigate(`/EditVendedors?id=${vendedorData.id_vendedor}`);

    }
    return (
        <main>

            <div className=" min-h-screen ">
                <div className=" text-center bottom-0 text-5xl h-1 p-6 text-fuchsia-700  font-bold mt-10">
                    <h1>Perfil de Vendedor</h1>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-[#ffffff] m-10 ml-5 w-[100] h-96 rounded-2xl">
                        <p className=" text-fuchsia-700 text-3xl ml-10 mt-5">Información de la tienda</p>
                        <p className=" text-lg ml-5">
                            <span className="text-fuchsia-700"><br />Nombre: </span><span>{vendedorData?.nombre}</span>
                        </p>
                        <p className=" text-lg ml-5">
                            <span className="text-fuchsia-700"> <br /> Correo electrónico: </span><span className=" mr-5">{vendedorData?.email}</span>
                        </p>
                        <p className=" text-lg ml-5">
                            <span className=" text-fuchsia-700"> <br /> Cantidad de productos: </span><span>{cantidadProductos.id_vendedor}</span>
                        </p>
                    </div>
                    <div className="bg-[#ffffff] w-96 h-96 rounded-2xl">
                        <p className=" text-fuchsia-700 text-3xl ml-10 mt-5">Descripción</p>
                        <p className=" m-5 text-lg">
                            {vendedorData?.descripcion}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-center ">

                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Categorias"} link={'/CrearCategoria'}
                        />
                    </div>

                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Administrar productos"} link={'/AdministrarProductos'}
                        />
                    </div>
                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Log out"}
                            onClick={logoutVendedor}
                        />
                    </div>
                    <div className=" m-3">
                        <BotonGeneralRealizarAccion texto="Editar Datos" onClick={handleEditClick} disabled={!vendedorData}
                        />
                    </div>
                </div>
            </div>

        </main>
    );

}
export default PerfilVendedor;