import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import axios from "axios";

function CategoriaSmartwatch(){

    const[prodSmartwatch, setprodSmartch] = useState([])

    useEffect(function() {
        axios
        .get("http://localhost:3001/api/productosQuery/siete")
        .then(function(datos){
            setprodSmartch(datos.data)
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
                <h1>Smartwatch</h1>
            </div>
            <div>
            <div className="container text-semibold gap-8 mx-16 flex justify-center flex-row h-auto grid grid-cols-4">
            {prodSmartwatch.map(function(smartwatch){
                return(
                    <CardProdu
                    key={smartwatch.id_producto_categoria}
                    producto={smartwatch.producto}
                    imagen={smartwatch.imagen}
                    precio={smartwatch.precio}
                    stock={smartwatch.stock}
                    />
                )
            })}            
            </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default CategoriaSmartwatch