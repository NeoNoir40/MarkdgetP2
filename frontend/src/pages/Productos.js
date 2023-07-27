import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CirculoCategoria from "../components/CirculoCategoria";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProdu from "../components/CardProdu";
import laptogam from '../img/laptogam.webp';
import CardOfert from "../components/CardOfert";
import gaming from "../img/gaming.webp"
import IndicadorPag from "../components/PagIndicador";
import axios from "axios";

function Productos() {

    const [categorias, setCategorias] = useState([])

    useEffect(function () {
        axios
            .get("http://localhost:3001/api/categorias")
            .then(function (datos) {
                setCategorias(datos.data);
            })
            .catch(() => {
                console.error("Hay un error")
            });
    }, []);



    const [productosCategorias, setproductosCategorias] = useState([])

    useEffect(function () {
        axios
            .get("http://localhost:3001/api/productosCategoriasRoutes")
            .then(function (datos) {
                setproductosCategorias(datos.data);
            })
            .catch(() => {
                console.error("Hay un error")
            });
    }, []);

    return (

        <main className="bgmain min-h-screen">
            <div>
                <div className="text-center mb-4 mt-4">x
                    <IndicadorPag
                        TituloIndc={"Categorias"} />
                </div>
                <div className="ml-12 h-60 flex mx-auto gap  grid-cols-4 justify-center flex-row">
                    {categorias.map(function (categoria) {
                        return (
                            <Link to={categoria.enlace}><CirculoCategoria
                                key={categoria.id_categoria}
                                categoria={categoria.nombre}
                                img={categoria.imagen_categoria}
                            /></Link>
                        )
                    })}
                </div>

                <div className="flex flex-row gap-20 mx-auto justify-center">
                    <CardOfert text="¡30% DE DESCUENTO EN ARTÍCULOS DE COMPUTADORA!" imagen={laptogam} />
                    <CardOfert text="¡10% DE DESCUENTO EN ARTÍCULOS GAMING" imagen={gaming} />
                </div>

                <div className="flex flex-row mt-10">
                    <div className="text-semibold gap-12 mx-auto justify-center h-auto grid grid-cols-4">
                        {productosCategorias.map(function (producto_categoria) {
                            return (
                                <CardProdu
                                    key={producto_categoria.id_producto_categoria}
                                    id_producto_categoria={producto_categoria.id_producto_categoria}
                                    imagen={producto_categoria.imagen_categoria}
                                    categoria={producto_categoria.categoria}
                                    producto={producto_categoria.nombre_producto}
                                    precio={producto_categoria.precio}
                                    stock={producto_categoria.stock}
                                />
                            )
                        })}


                    </div>



                </div>
            </div>
        </main>
    )
}


export default Productos;