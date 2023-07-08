import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import image2x from "../img/image2x.png"
import lap10 from "../img/lap10.png"
import laaap from "../img/laaap.png"


function CategoriaLaptop(){
    return(
        <div>
            <div className="h-24">
            <Encabezado/>
            </div>
            <div className="text-center text-white text-3xl h-16">
                <h1>Laptops</h1>
            </div>
            <div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Laptop OMEN" descripcion="Laptop para juegos marca OMEN" imagen={image2x} precio="18,200.00" />
            <CardProdu producto="Laptop OMEN" descripcion="Laptop para juegos marca OMEN" imagen={image2x} precio="18,200.00" />
            <CardProdu producto="Laptop OMEN" descripcion="Laptop para juegos marca OMEN" imagen={image2x} precio="18,200.00" />
            <CardProdu producto="Laptop OMEN" descripcion="Laptop para juegos marca OMEN" imagen={image2x} precio="18,200.00" />
            <CardProdu producto="Laptop OMEN" descripcion="Laptop para juegos marca OMEN" imagen={image2x} precio="18,200.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Laptop Honor" descripcion="Laptop con Core i5, 256GB 8GB RAM" imagen={laaap} precio="13,050.00" />
            <CardProdu producto="Laptop Honor" descripcion="Laptop con Core i5, 256GB 8GB RAM" imagen={laaap} precio="13,050.00" />
            <CardProdu producto="Laptop Honor" descripcion="Laptop con Core i5, 256GB 8GB RAM" imagen={laaap} precio="13,050.00" />
            <CardProdu producto="Laptop Honor" descripcion="Laptop con Core i5, 256GB 8GB RAM" imagen={laaap} precio="13,050.00" />
            <CardProdu producto="Laptop Honor" descripcion="Laptop con Core i5, 256GB 8GB RAM" imagen={laaap} precio="13,050.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row">
            <CardProdu producto="Laptop ASUS" descripcion="Laptop para hogar ProArtStudiobook" imagen={lap10} precio="11,100.00" />
            <CardProdu producto="Laptop ASUS" descripcion="Laptop para hogar ProArtStudiobook" imagen={lap10} precio="11,100.00" />
            <CardProdu producto="Laptop ASUS" descripcion="Laptop para hogar ProArtStudiobook" imagen={lap10} precio="11,100.00" />
            <CardProdu producto="Laptop ASUS" descripcion="Laptop para hogar ProArtStudiobook" imagen={lap10} precio="11,100.00" />
            <CardProdu producto="Laptop ASUS" descripcion="Laptop para hogar ProArtStudiobook" imagen={lap10} precio="11,100.00" />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </div>
        
    )
}

export default CategoriaLaptop;