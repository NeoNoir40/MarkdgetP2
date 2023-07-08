import React from "react";
import CuadroPromocion from "../components/CuadroPromocion";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import imgbtn1 from '../img/imgbtn1.jpg';
import imgbtn2 from '../img/imgbtn2.jpg';
import { Link } from "react-router-dom";
import IndicadorPag from "../components/PagIndicador";

function Inicio() {
    return (
        <div>
            <main className="bgmain ">
                <Encabezado/>
                <div>

                </div>
<div className="text-center" >
    <IndicadorPag
    
    TituloIndc={"Bienvenido a Markdget!"}
    
    />
</div>
                

                <div className=" flex justify-center flex-wrap mx-auto mt-10 " >
                    <div className="">
                        <Link className="" to="/CategoriaTablet"><img className="  w-65  hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs  " src={img1} alt="" /><p className="text-center text-white font-bold text-3xl hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs" >Tablets</p></Link>
                        <Link className="ml-5" to="/CategoriaMonitores"><img className=" w-65 hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs" src={img2} alt="" /><p className="text-center text-white font-bold text-3xl hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs">Monitores</p></Link>
                    </div>
                    <div className=" ml-10 ">
                        <Link className="" to="/CategoriaAuricular"><img className=" w-65 hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs" src={img3} alt="" /> <p className="text-center text-white font-bold text-3xl hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs">Audifonos</p> </Link>
                        <Link className="ml-5" to="/CategoriaLaptop"><img className="w-65 hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs" src={img4} alt="" /><p className="text-center text-white font-bold text-3xl hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs">Laptops</p></Link>
                    </div>
                </div>

                <CuadroPromocion
                titulo={"Registrate y aprovecha de los beneficios, !Hazlo ya!"}
                imagenbtn={imgbtn1}
                texto={"Registrate"}
                />

                <CuadroPromocion 
                titulo={"Deseas formar parte de Markdget y vender tus productos? Contactanos YA!"}
                imagenbtn={imgbtn2}
                texto={"Contactanos!"}
                />
                
                <Footer/>
            </main>
        </div>
        
    );
}

export default Inicio;