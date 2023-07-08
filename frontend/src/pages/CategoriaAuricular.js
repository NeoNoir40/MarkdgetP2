import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProdu from "../components/CardProdu";
import auri1 from "../img/auri1.webp";
import auri2 from "../img/auri2.webp";
import auri3 from "../img/auri3.png";

function CategoriaAuricular() {
    return(
        <div>
            <div className="h-24">
                <Encabezado/>
            </div>
            <div className="text-white text-center text-3xl h-16">
                <h1>Auriculares</h1>
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Auricular Redragon" descripcion="Auriculares Pandorra 2 3.5mm RGB" imagen={auri1} precio="809.99" />
            <CardProdu producto="Auricular Redragon" descripcion="Auriculares Pandorra 2 3.5mm RGB" imagen={auri1} precio="809.99" />
            <CardProdu producto="Auricular Redragon" descripcion="Auriculares Pandorra 2 3.5mm RGB" imagen={auri1} precio="809.99" />
            <CardProdu producto="Auricular Redragon" descripcion="Auriculares Pandorra 2 3.5mm RGB" imagen={auri1} precio="809.99" />
            <CardProdu producto="Auricular Redragon" descripcion="Auriculares Pandorra 2 3.5mm RGB" imagen={auri1} precio="809.99" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Auriculares Sony" descripcion="Auriculares Inalámbricos WF-1000XM4" imagen={auri2} precio="2,280.00" />
            <CardProdu producto="Auriculares Sony" descripcion="Auriculares Inalámbricos WF-1000XM4" imagen={auri2} precio="2,280.00" />
            <CardProdu producto="Auriculares Sony" descripcion="Auriculares Inalámbricos WF-1000XM4" imagen={auri2} precio="2,280.00" />
            <CardProdu producto="Auriculares Sony" descripcion="Auriculares Inalámbricos WF-1000XM4" imagen={auri2} precio="2,280.00" />
            <CardProdu producto="Auriculares Sony" descripcion="Auriculares Inalámbricos WF-1000XM4" imagen={auri2} precio="2,280.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row">
            <CardProdu producto="Auricular Samsung" descripcion="Auriculares inalámbricas ITFIT con diseo lo seguí por ti" imagen={auri3} precio="370.00" />
            <CardProdu producto="Auricular Samsung" descripcion="Auriculares inalámbricas ITFIT con diseo lo seguí por ti" imagen={auri3} precio="370.00" />
            <CardProdu producto="Auricular Samsung" descripcion="Auriculares inalámbricas ITFIT con diseo lo seguí por ti" imagen={auri3} precio="370.00" />
            <CardProdu producto="Auricular Samsung" descripcion="Auriculares inalámbricas ITFIT con diseo lo seguí por ti" imagen={auri3} precio="370.00" />
            <CardProdu producto="Auricular Samsung" descripcion="Auriculares inalámbricas ITFIT con diseo lo seguí por ti" imagen={auri3} precio="370.00" />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default CategoriaAuricular;

/*<div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen precio="7,599.99" />
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen precio="7,599.99" />
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen precio="7,599.99" />
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen precio="7,599.99" />
            <CardProdu producto="Lenovo Tab 12 Pro" descripcion="Tablet Lenovo 64GB 4GB RAM" imagen precio="7,599.99" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row h-96">
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen precio="5,280.00" />
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen precio="5,280.00" />
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen precio="5,280.00" />
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen precio="5,280.00" />
            <CardProdu producto="Tablet Samsung" descripcion="Tablet con cámara 13Mpx 32GB 3GB RAM" imagen precio="5,280.00" />
            </div>
            <div className="text-semibold gap-12 mx-auto flex justify-center flex-row">
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen precio="5,240.00" />
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen precio="5,240.00" />
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen precio="5,240.00" />
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen precio="5,240.00" />
            <CardProdu producto="TLC Tablet" descripcion="Tablet de TLC 8plg 32GB+4GB RAM " imagen precio="5,240.00" />
            </div>*/