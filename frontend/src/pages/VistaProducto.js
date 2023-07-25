import React, { useState, useEffect } from "react";
import ImagenVistaProducto from "../components/ImagneVistaProducto";
import imagen from '../img/hardware.png';
import VistaProductoPrincipal from "../components/VistaProductoPrincipal";
import DescripcionProductos from "../components/DescripcionProductos";
import BotonPagarEstatic from "../components/BotonPagarEstic";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
                        <BotonPagarEstatic />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VistaProducto;
