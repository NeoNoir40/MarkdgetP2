import React, { useState, useEffect } from "react";
import CardProdu from "../components/CardProdu";
import Footer from "../components/Footer";
import axios from "axios";

function CategoriaCelular(){

    const [prodCelular, setprodCelular] = useState([])

    useEffect( function() {
        axios
        .get("http://localhost:3001/api/productosQuery/")
        .then(function (datos) {
            setprodCelular(datos.data)
        })
        .catch(() => {
            console.error("Hay un error")
        });
    },[]);

    return(
        <div>
            <div className="h-24">
            </div>
            <div className="text-white text-center text-3xl h-16">
                <h1>Celulares</h1>
            </div>
            <div className="container text-semibold gap-8 mx-16 flex justify-center flex-row h-auto grid grid-cols-4">
                {prodCelular.map(function(celular){
                    return(
                        <CardProdu
                        key={celular.id_producto_categoria}
                        producto={celular.producto}
                        imagen={celular.imagen}
                        precio={celular.precio}
                        stock={celular.stock}
                        />
                    )
                })}
            </div>
            
            <div>
            </div>
        </div>
    )
}

export default CategoriaCelular;