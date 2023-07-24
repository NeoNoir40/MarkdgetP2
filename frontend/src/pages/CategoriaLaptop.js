import React, { useState, useEffect } from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import axios from "axios";


function CategoriaLaptop(){

    const [prodLaptops, setprodLaptos] = useState([])

    useEffect(function() {
        axios
        .get("http://localhost:3001/api/productosQuery/dos")
        .then(function(datos){
            setprodLaptos(datos.data)
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
                <h1>Laptops</h1>
            </div>
            <div>
            <div className="container text-semibold gap-8 mx-16 flex justify-center flex-row h-auto grid grid-cols-4">
            {prodLaptops.map(function(laptops){
                return(
                    <CardProdu
                    key={laptops.id_producto_categoria}
                    producto={laptops.producto}
                    imagen={laptops.imagen}
                    precio={laptops.precio}
                    stock={laptops.stock}
                    />
                )
            })}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </div>
        
    )
}

export default CategoriaLaptop;