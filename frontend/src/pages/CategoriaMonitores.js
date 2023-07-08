import React from "react";
import CardProdu from "../components/CardProdu";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import moni1 from "../img/moni1.webp";
import moni2 from "../img/moni2.avif";
import moni3 from "../img/moni3.webp";

function CategoriaMonitores(){
    return(
        <div>
            <div className="h-24">
                <Encabezado/>
            </div>
            <div className="text-center text-white text-3xl h-16">
                <h1>Monitores</h1>
            </div>
            <div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Monitor ViewSonic" descripcion="Monitor de 27plg de 240Hz" imagen={moni1} precio="1,599.99" />
            <CardProdu producto="Monitor ViewSonic" descripcion="Monitor de 27plg de 240Hz" imagen={moni1} precio="1,599.99" />
            <CardProdu producto="Monitor ViewSonic" descripcion="Monitor de 27plg de 240Hz" imagen={moni1} precio="1,599.99" />
            <CardProdu producto="Monitor ViewSonic" descripcion="Monitor de 27plg de 240Hz" imagen={moni1} precio="1,599.99" />
            <CardProdu producto="Monitor ViewSonic" descripcion="Monitor de 27plg de 240Hz" imagen={moni1} precio="1,599.99" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Monitor Odyssey G6" descripcion="Monitor Gamer FullHD a 240Hz" imagen={moni2} precio="1,450.00" />
            <CardProdu producto="Monitor Odyssey G6" descripcion="Monitor Gamer FullHD a 240Hz" imagen={moni2} precio="1,450.00" />
            <CardProdu producto="Monitor Odyssey G6" descripcion="Monitor Gamer FullHD a 240Hz" imagen={moni2} precio="1,450.00" />
            <CardProdu producto="Monitor Odyssey G6" descripcion="Monitor Gamer FullHD a 240Hz" imagen={moni2} precio="1,450.00" />
            <CardProdu producto="Monitor Odyssey G6" descripcion="Monitor Gamer FullHD a 240Hz" imagen={moni2} precio="1,450.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row">
            <CardProdu producto="Monitor BENQ" descripcion="Monitor Gaming de resolución 1080p" imagen={moni3} precio="1,799.99" />
            <CardProdu producto="Monitor BENQ" descripcion="Monitor Gaming de resolución 1080p" imagen={moni3} precio="1,799.99" />
            <CardProdu producto="Monitor BENQ" descripcion="Monitor Gaming de resolución 1080p" imagen={moni3} precio="1,799.99" />
            <CardProdu producto="Monitor BENQ" descripcion="Monitor Gaming de resolución 1080p" imagen={moni3} precio="1,799.99" />
            <CardProdu producto="Monitor BENQ" descripcion="Monitor Gaming de resolución 1080p" imagen={moni3} precio="1,799.99" />
            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default CategoriaMonitores;