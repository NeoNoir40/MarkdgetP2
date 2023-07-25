import React, { useEffect, useState } from "react";
import {BiCaretLeftCircle,BiCaretRightCircle} from "react-icons/bi";
import CardProdu from "./CardProdu";
import gtneo from '../img/gtneo.webp';
import a23 from '../img/a23.avif';
import laptogam from '../img/laptogam.webp';
import audinal from '../img/audinal.webp';
import memddr4 from '../img/memddr4.png';
import CardOfert from "./CardOfert";
import pc from "../img/pc.avif";
import gaming from "../img/gaming.webp"
import axios from "axios";

function Carousel () {
    
    const [productosCategorias, setproductosCategorias] = useState([])

    useEffect(function() {
        axios
        .get('http://localhost:3001/api/productosCategoriasRoutes/')
        .then(function (datos) {
            setproductosCategorias(datos.data);
        })
        .catch(() => {
            console.error("Hay un error")
        });
    },[]);

    return(
    <div>
        <div className=" carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth">
        <div className="text-semibold gap-12 mx-auto flex justify-center h-96">
            {productosCategorias.map (function(producto_categoria) {
                return(
                    <CardProdu
                    key={producto_categoria.id_producto_categoria}
                    imagen={producto_categoria.imagen}
                    categoria={producto_categoria.categoria}
                    producto={producto_categoria.producto}
                    precio={producto_categoria.precio}
                    stock={producto_categoria.stock}
                    />
                )
            })}
                   </div>
                
        </div>
        
    </div>
    
    )
}

export default Carousel;