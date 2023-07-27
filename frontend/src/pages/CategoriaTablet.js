import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import axios from "axios";

function CategoriaTablet(){

    const [prodTablet, setprodTablet] = useState([])

    useEffect(function() {
        axios
        .get("http://localhost:3001/api/productosQuery/cinco")
        .then(function(datos){
            setprodTablet(datos.data)
        })
        .catch(() => {
            console.error("Hay un error")
        });
    },[]);

    return(
        <div>
        <div className="h-24">
        </div>
        <div className="text-white text-center h-16 text-3xl">
            <h1>Tablets</h1>
        </div>
        <div>
            <div className="container text-semibold gap-8 mx-16 flex justify-center flex-row h-auto grid grid-cols-4">
            {prodTablet.map(function(tablet){
                return(
                    <CardProdu
                    key={tablet.id_producto_categoria}
                    producto={tablet.producto}
                    imagen={tablet.imagen}
                    precio={tablet.precio}
                    stock={tablet.stock}
                    />
                )
            })}
            </div>
        <div>
        </div>
        </div>
        </div>
    )
}

export default CategoriaTablet;