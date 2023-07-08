import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import tab1 from "../img/tab1.webp";
import tab2 from "../img/tab2.avif";
import tab3 from "../img/tab3.png";

function CategoriaTablet(){
    return(
        <div>
        <div className="h-24">
            <Encabezado/>
        </div>
        <div className="text-white text-center h-16 text-3xl">
            <h1>Tablets</h1>
        </div>
        <div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen={tab1} precio="7,599.99" />
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen={tab1} precio="7,599.99" />
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen={tab1} precio="7,599.99" />
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen={tab1} precio="7,599.99" />
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen={tab1} precio="7,599.99" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen={tab2} precio="5,280.00" />
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen={tab2} precio="5,280.00" />
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen={tab2} precio="5,280.00" />
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen={tab2} precio="5,280.00" />
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen={tab2} precio="5,280.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row">
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen={tab3} precio="5,240.00" />
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen={tab3} precio="5,240.00" />
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen={tab3} precio="5,240.00" />
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen={tab3} precio="5,240.00" />
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen={tab3} precio="5,240.00" />
            </div>
        <div>
            <Footer/>
        </div>
        </div>
        </div>
    )
}

export default CategoriaTablet;