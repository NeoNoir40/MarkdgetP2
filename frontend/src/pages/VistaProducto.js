import React, { useState, useEffect } from "react";
import ImagenVistaProducto from "../components/ImagneVistaProducto";
import imagen from '../img/hardware.png';
import VistaProductoPrincipal from "../components/VistaProductoPrincipal";
import DescripcionProductos from "../components/DescripcionProductos";
import BotonPagarEstatic from "../components/BotonPagarEstic";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function VistaProducto() {
    const [producto, setProducto] = useState(null);
    const location = useLocation();
    const idProductoCategoria = new URLSearchParams(location.search).get("id");

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/productosCategoriasRoutes/${idProductoCategoria}`)
            .then((response) => {
                setProducto(response.data);
            })
            .catch(() => {
                console.error("Hay un error");
            });
    }, [idProductoCategoria]);

    const handlePagarClick = async () => {
        try {
            // Enviar los detalles del producto al servidor para crear una orden de pago en PayPal
            const response = await axios.post("http://localhost:3002/create-order", {
                id_producto: producto.id_producto,
                nombre_producto: producto.nombre_producto,
                precio: producto.precio,
            });

            // Recibir la URL de redirección de PayPal para completar el pago
            const redirectUrl = response.data.redirectUrl;
            console.log("Redirect URL:", redirectUrl);


            // Redirigir al usuario a la URL de redirección de PayPal para completar el pago
            window.location.href = redirectUrl;
        } catch (error) {
            console.error("Error al procesar el pago", error);
        }
    };

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="  ">
            <div className=" min-h-screen">
                <div className="  w-[1480px] h-[1000px]  ml-[250px] m-auto mt-10 flex  justify-center items-center">
                    <div className="flex flex-row mr-20  ">
                        <ImagenVistaProducto
                            imagen={producto.imagen_categoria}
                            imagen1={producto.imagen_categoria}
                            imagen2={producto.imagen_categoria}
                        />
                    </div>

                    <div className="flex-col flex  ">
                        <VistaProductoPrincipal
                            imagen={producto.imagen_categoria}
                        />

                        <div>
                            <DescripcionProductos
                                TituloDescProducto={producto.nombre_producto}
                                categoria={producto.nombre_categoria}
                                descripcion={producto.descripcion}
                            />
                        </div>
                    </div>

                    <div >
                        <div className="w-60 h-72 bg-[#DFDFDF] rounded-lg ml-[200px] mb-[100px] text-center">
                            <div className="mb-5">
                                <div>
                                    <br />
                                    <br />
                                    <h1 className="font-bold text-[20px] text-[#9B03A8]">Realizar compra</h1>
                                    <p className="mt-3 text-black">Ir a paserala de pago</p>
                                    <button onClick={handlePagarClick} className="bg-fuchsia-900 rounded-md mt-4 text-white mb-3 py-2 px-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VistaProducto;
