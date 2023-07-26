import React, { useEffect, useState } from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import axios from "axios";

function CategoriaAuricular() {

    const [prodAuricular, setprodAuricular] = useState([])

    useEffect( function() {
        axios
        .get("http://localhost:3001/api/productosQuery/seis")
        .then(function (datos) {
            setprodAuricular(datos.data)
        })
        .catch(() => {
            console.error("Hay un error")
        });
    },[]);

    return(
        <div>
            <div className="text-white text-center text-3xl h-16">
                <h1>Auriculares</h1>
            </div>
            <div className="container text-semibold gap-8 mx-16 flex justify-center flex-row h-auto grid grid-cols-4">
            {prodAuricular.map(function(auricular){
                    return(
                        <CardProdu
                        key={auricular.id_producto_categoria}
                        producto={auricular.producto}
                        imagen={auricular.imagen}
                        precio={auricular.precio}
                        stock={auricular.stock}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default CategoriaAuricular;