import React, { useEffect, useState } from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import axios from "axios";

function CategoriaHardware() {

    const [prodHardware, setprodHardware] = useState([])

    useEffect(function () {
        axios
            .get("http://localhost:3001/api/productosQuery/cuatro")
            .then(function (datos) {
                setprodHardware(datos.data)
            })
            .catch(() => {
                console.error("Hay un error")
            });
    }, []);

    return (
        <div>
            <div className="text-center text-white text-3xl h-16">
                <h1>Hardware</h1>
            </div>
            <div>
                <div className="container text-semibold gap-8 mx-16 flex justify-center flex-row h-auto grid grid-cols-4">
                    {prodHardware.map(function (hardware) {
                        return (
                            <CardProdu
                                key={hardware.id_producto_categoria}
                                producto={hardware.producto}
                                imagen={hardware.imagen}
                                precio={hardware.precio}
                                stock={hardware.stock}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoriaHardware;