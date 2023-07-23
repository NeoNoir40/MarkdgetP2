import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CirculoCategoria from "../components/CirculoCategoria";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProdu from "../components/CardProdu";
import gtneo from '../img/gtneo.webp';
import a23 from '../img/a23.avif';
import laptogam from '../img/laptogam.webp';
import audinal from '../img/audinal.webp';
import memddr4 from '../img/memddr4.png';
import CardOfert from "../components/CardOfert";
import pc from "../img/pc.avif";
import gaming from "../img/gaming.webp"
import IndicadorPag from "../components/PagIndicador";
import axios from "axios";
import Carousel from "../components/Carousel";

function Productos() {

    const [categorias, setCategorias] = useState([])
    
    useEffect(function (){
        axios
        .get("http://localhost:3001/api/categorias")
        .then(function (datos) {
            setCategorias(datos.data);
        })
        .catch(() => {
            console.error("Hay un error")
        });
    },[]);

    const [productosCategorias, setproductosCategorias] = useState([])

useEffect(function() {
    axios
    .get("http://localhost:3001/api/productos")
    .then(function (datos) {
        setproductosCategorias(datos.data);
    })
    .catch(() => {
        console.error("Hay un error")
    });
},[]);

    return (

        <main className="bgmain min-h-screen">
            <Encabezado />
            <div className="min-h-screen">
                <div className="text-center mb-4 mt-4">x
                    <IndicadorPag
                        TituloIndc={"Categorias"} />
                </div>
                <div className="ml-12 h-60 flex mx-auto gap-5  justify-center flex-row">
                    {categorias.map(function (categoria){
                    return(
                <CirculoCategoria
                key={categoria.id_categoria}
                categoria={categoria.nombre}
                img={categoria.image_cat}
                />
                    )})}
                    </div>

<div className="flex flex-row gap-20 mx-auto justify-center">
    <CardOfert text="¡30% DE DESCUENTO EN ARTÍCULOS DE COMPUTADORA!" imagen={pc}/>
    <CardOfert text="¡10% DE DESCUENTO EN ARTÍCULOS GAMING" imagen={gaming} />
</div>

    <div className="flex flex-row">
        <div className=" carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth">
        <div className="text-semibold gap-12 mx-auto flex flex-row justify-center h-96">
            {productosCategorias.map (function(producto_categoria) {
                return(
                    <CardProdu
                    key={producto_categoria.id_producto_categoria}
                    imagen={gaming}
                    categoria={producto_categoria.categoria}
                    producto={producto_categoria.nombre}
                    precio={producto_categoria.precio}
                    stock={producto_categoria.stock}
                    />
                )
            })}
                   
                
        </div>
        
    </div>
    
    
                    
                </div>
                
            </div>
            
            <Footer />
        </main>
    )
 }


export default Productos;