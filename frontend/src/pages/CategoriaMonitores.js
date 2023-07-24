import React, { useEffect, useState } from "react";
import CardProdu from "../components/CardProdu";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import axios from "axios";

function CategoriaMonitores(){

    const [prodMonitores, setprodMonitores] = useState([])

    useEffect(function() {
        axios
        .get("http://localhost:3001/api/productosQuery/cuatro")
        .then(function(datos){
            setprodMonitores(datos.data)
        })
        .catch(() => {
            console.error("Hay un error")
        });
    },[]);

    return(
        <div>
            <div className="h-24">
                <Encabezado/>
            </div>
            <div className="text-center text-white text-3xl h-16">
                <h1>Monitores</h1>
            </div>
            <div>
            <div className="container text-semibold gap-8 mx-16 flex justify-center flex-row h-auto grid grid-cols-4">
            {prodMonitores.map(function(monitores){
                return(
                    <CardProdu
                    key={monitores.id_producto_categoria}
                    producto={monitores.producto}
                    imagen={monitores.imagen}
                    precio={monitores.precio}
                    stock={monitores.stock}
                    />
                )
            })}
            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default CategoriaMonitores;