import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import smart1 from "../img/smart1.avif";
import smart2 from "../img/smart2.png";
import smart3 from "../img/smart3.webp";

function CategoriaSmartwatch(){
    return(
        <div>
            <div className="h-24">
                <Encabezado/>
            </div>
            <div className="text-white text-center text-3xl h-16">
                <h1>Smartwatch</h1>
            </div>
            <div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="SmartWatch Samsung" descripcion="Reloj Inteligente Rosado Samsung" imagen={smart1} precio="2,710.00" />
            <CardProdu producto="SmartWatch Samsung" descripcion="Reloj Inteligente Rosado Samsung" imagen={smart1} precio="2,710.00" />
            <CardProdu producto="SmartWatch Samsung" descripcion="Reloj Inteligente Rosado Samsung" imagen={smart1} precio="2,710.00" />
            <CardProdu producto="SmartWatch Samsung" descripcion="Reloj Inteligente Rosado Samsung" imagen={smart1} precio="2,710.00" />
            <CardProdu producto="SmartWatch Samsung" descripcion="Reloj Inteligente Rosado Samsung" imagen={smart1} precio="2,710.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Smart Watch Z" descripcion="Sart Watch Sport and Health Waterproof Pro" imagen={smart2} precio="1,250.00" />
            <CardProdu producto="Smart Watch Z" descripcion="Sart Watch Sport and Health Waterproof Pro" imagen={smart2} precio="1,250.00" />
            <CardProdu producto="Smart Watch Z" descripcion="Sart Watch Sport and Health Waterproof Pro" imagen={smart2} precio="1,250.00" />
            <CardProdu producto="Smart Watch Z" descripcion="Sart Watch Sport and Health Waterproof Pro" imagen={smart2} precio="1,250.00" />
            <CardProdu producto="Smart Watch Z" descripcion="Sart Watch Sport and Health Waterproof Pro" imagen={smart2} precio="1,250.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row">
            <CardProdu producto="Realme Watch 3" descripcion="Reloj Inteligente Realme Watch 3" imagen={smart3} precio="1,100.00" />
            <CardProdu producto="Realme Watch 3" descripcion="Reloj Inteligente Realme Watch 3" imagen={smart3} precio="1,100.00" />
            <CardProdu producto="Realme Watch 3" descripcion="Reloj Inteligente Realme Watch 3" imagen={smart3} precio="1,100.00" />
            <CardProdu producto="Realme Watch 3" descripcion="Reloj Inteligente Realme Watch 3" imagen={smart3} precio="1,100.00" />
            <CardProdu producto="Realme Watch 3" descripcion="Reloj Inteligente Realme Watch 3" imagen={smart3} precio="1,100.00" />
            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default CategoriaSmartwatch