import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CirculoCategoria from "../components/CirculoCategoria";
import celular from '../img/celular.png';
import laptop from '../img/laptop.png';
import monitor from '../img/monitor.webp';
import tablet from '../img/tablet.png';
import hardware from '../img/hardware.png';
import auricular from '../img/auricular.png';
import smartwatch from '../img/smartwatch.png';
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

function Productos() {
    return (

        <main className="bgmain min-h-screen">
            <Encabezado />
            <div className="min-h-screen">
                <div className="text-center mb-4 mt-4">
                    <IndicadorPag
                        TituloIndc={"Categorias"} />
                </div>
                <div className="ml-12 h-60 flex mx-auto gap-5  justify-center">
                    <Link to="/CategoriaCelular"><CirculoCategoria imagen={celular} categoria="Celulares" /></Link>
                    <Link to="/CategoriaLaptop"><CirculoCategoria imagen={laptop} categoria="Laptops" /></Link>
                    <Link to="/CategoriaMonitores"><CirculoCategoria imagen={monitor} categoria="Monitores" /></Link>
                    <Link to="/CategoriaHardware"><CirculoCategoria imagen={hardware} categoria="Hardware" /></Link>
                    <Link to="/CategoriaTablet"><CirculoCategoria imagen={tablet} categoria="Tablets" /></Link>
                    <Link to="/CategoriaAuricular"><CirculoCategoria imagen={auricular} categoria="Auriculares" /></Link>
                    <Link to="/CategoriaSmartwatch"><CirculoCategoria imagen={smartwatch} categoria="Smartwatchs" /></Link>
                </div>
                <div className="text-semibold gap-12 mx-auto flex justify-center h-96">
                    <CardProdu imagen={gtneo} producto="Realme GT Neo 3" descripcion="150W Dual SIM 256GB Negro 12GB RAM" precio="4,750.00" />
                    <CardProdu imagen={a23} producto="Samsung A23" descripcion="128GB 4GB RAM Color Azul" precio="4,099.99" />
                    <CardProdu imagen={laptogam} producto="Laptop LENOVO" descripcion="256GB 8GB RAM Intel Core i7 7thGen" precio="24,500.00" />
                    <CardProdu imagen={audinal} producto="Audifonos STF" descripcion="Audífonos Inalámbricos STF 12 Negros" precio="200.00" />
                    <CardProdu imagen={memddr4} producto="Memoria RAM DDR4" descripcion="16GB 3600MHz COrsair Vengeance RGB Pro" precio="1,479.00" />
                </div>
                <div className="flex flex-row gap-20 mx-auto justify-center">
                    <CardOfert text="¡30% DE DESCUENTO EN ARTÍCULOS DE COMPUTADORA!" imagen={pc} />
                    <CardOfert text="¡10% DE DESCUENTO EN ARTÍCULOS GAMING" imagen={gaming} />
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Productos;