import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import hw1 from "../img/hw1.avif";
import hw2 from "../img/hw2.webp";
import hw3 from "../img/hw3.webp";

function CategoriaHardware(){
    return(
        <div>
            <div className="h-24">
                <Encabezado/>
            </div>
            <div className="text-center text-white text-3xl h-16">
                <h1>Hardware</h1>
            </div>
            <div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="SSD HP" descripcion="Disco de Estado Sólido de 512GB" imagen={hw1} precio="1,599.99" />
            <CardProdu producto="SSD HP" descripcion="Disco de Estado Sólido de 512GB" imagen={hw1} precio="1,599.99" />
            <CardProdu producto="SSD HP" descripcion="Disco de Estado Sólido de 512GB" imagen={hw1} precio="1,599.99" />
            <CardProdu producto="SSD HP" descripcion="Disco de Estado Sólido de 512GB" imagen={hw1} precio="1,599.99" />
            <CardProdu producto="SSD HP" descripcion="Disco de Estado Sólido de 512GB" imagen={hw1} precio="1,599.99" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Teclado Hyperx" descripcion="Hyperx Teclado RGB Gamer" imagen={hw2} precio="1,289.99" />
            <CardProdu producto="Teclado Hyperx" descripcion="Hyperx Teclado RGB Gamer" imagen={hw2} precio="1,289.99" />
            <CardProdu producto="Teclado Hyperx" descripcion="Hyperx Teclado RGB Gamer" imagen={hw2} precio="1,289.99" />
            <CardProdu producto="Teclado Hyperx" descripcion="Hyperx Teclado RGB Gamer" imagen={hw2} precio="1,289.99" />
            <CardProdu producto="Teclado Hyperx" descripcion="Hyperx Teclado RGB Gamer" imagen={hw2} precio="1,289.99" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row">
            <CardProdu producto="Memoria DDR4 Spectrix" descripcion="Memoria RAM 8GB DDR4 Spectrix" imagen={hw3} precio="1,708.03" />
            <CardProdu producto="Memoria DDR4 Spectrix" descripcion="Memoria RAM 8GB DDR4 Spectrix" imagen={hw3} precio="1,708.03" />
            <CardProdu producto="Memoria DDR4 Spectrix" descripcion="Memoria RAM 8GB DDR4 Spectrix" imagen={hw3} precio="1,708.03" />
            <CardProdu producto="Memoria DDR4 Spectrix" descripcion="Memoria RAM 8GB DDR4 Spectrix" imagen={hw3} precio="1,708.03" />
            <CardProdu producto="Memoria DDR4 Spectrix" descripcion="Memoria RAM 8GB DDR4 Spectrix" imagen={hw3} precio="1,708.03" />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </div>
    )
}

export default CategoriaHardware;