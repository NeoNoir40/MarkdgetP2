import React from "react";
import CardProdu from "../components/CardProdu";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import celular from "../img/celular.png"
import gtneo from "../img/gtneo.webp"
import a23 from "../img/a23.avif";

function CategoriaCelular(){
    return(
        <div>
            <div className="h-24">
                <Encabezado/>
            </div>
            <div className="text-white text-center text-3xl h-16">
                <h1>Celulares</h1>
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Samsung Note 10" descripcion="Celular Blanco 256GB 12GB RAM" imagen={celular} precio="7,500.00" />
            <CardProdu producto="Samsung Note 10" descripcion="Celular Blanco 256GB 12GB RAM" imagen={celular} precio="7,500.00" />
            <CardProdu producto="Samsung Note 10" descripcion="Celular Blanco 256GB 12GB RAM" imagen={celular} precio="7,500.00" />
            <CardProdu producto="Samsung Note 10" descripcion="Celular Blanco 256GB 12GB RAM" imagen={celular} precio="7,500.00" />
            <CardProdu producto="Samsung Note 10" descripcion="Celular Blanco 256GB 12GB RAM" imagen={celular} precio="7,500.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Realme GT Neo" descripcion="128GB 6GB RAM Celular color morado con procesador Mediatek" imagen={gtneo} precio="6,250.00" />
            <CardProdu producto="Realme GT Neo" descripcion="128GB 6GB RAM Celular color morado con procesador Mediatek" imagen={gtneo} precio="6,250.00" />
            <CardProdu producto="Realme GT Neo" descripcion="128GB 6GB RAM Celular color morado con procesador Mediatek" imagen={gtneo} precio="6,250.00" />
            <CardProdu producto="Realme GT Neo" descripcion="128GB 6GB RAM Celular color morado con procesador Mediatek" imagen={gtneo} precio="6,250.00" />
            <CardProdu producto="Realme GT Neo" descripcion="128GB 6GB RAM Celular color morado con procesador Mediatek" imagen={gtneo} precio="6,250.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row">
            <CardProdu producto="Realme GT Neo" descripcion="Celular Samsung Azul con 64GB 4GB RAM con procesador Exynos" imagen={a23} precio="3,780.00" />
            <CardProdu producto="Realme GT Neo" descripcion="Celular Samsung Azul con 64GB 4GB RAM con procesador Exynos" imagen={a23} precio="3,780.00" />
            <CardProdu producto="Realme GT Neo" descripcion="Celular Samsung Azul con 64GB 4GB RAM con procesador Exynos" imagen={a23} precio="3,780.00" />
            <CardProdu producto="Realme GT Neo" descripcion="Celular Samsung Azul con 64GB 4GB RAM con procesador Exynos" imagen={a23} precio="3,780.00" />
            <CardProdu producto="Realme GT Neo" descripcion="Celular Samsung Azul con 64GB 4GB RAM con procesador Exynos" imagen={a23} precio="3,780.00" />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default CategoriaCelular;