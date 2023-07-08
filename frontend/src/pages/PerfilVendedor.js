import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";

function PerfilVendedor() {
    return (
        <main>
            <Encabezado />
            <div className=" min-h-screen ">
            <div className=" text-center bottom-0 text-5xl h-1 p-6 text-fuchsia-700  font-bold mt-10">
                <h1>Perfil de Vendedor</h1>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-[#ffffff] m-10 ml-5 w-[100] h-96 rounded-2xl">
                    <p className=" text-fuchsia-700 text-3xl ml-10 mt-5">Información de la tienda</p>
                    <p className=" text-lg ml-5">
                        <span className="text-fuchsia-700"><br />Nombre: </span><span>Gadgets de cancun</span>
                    </p>
                    <p className=" text-lg ml-5">
                        <span className=" text-fuchsia-700"> <br /> Fecha de inicio: </span><span>11-06-23</span>
                    </p>
                    <p className=" text-lg ml-5">
                        <span className="text-fuchsia-700"> <br /> Correo electrónico: </span><span className=" mr-5">markdget@markdget.com</span>
                    </p>
                    <p className=" text-lg ml-5">
                        <span className="text-fuchsia-700"> <br /> Número telefónico: </span><span>10239120-9312</span>
                    </p>
                    <p className=" text-lg ml-5">
                        <span className=" text-fuchsia-700"> <br /> Cantidad de productos: </span><span>10</span>
                    </p>
                </div>
                <div className="bg-[#ffffff] w-96 h-96 rounded-2xl">
                    <p className=" text-fuchsia-700 text-3xl ml-10 mt-5">Descripción</p>
                    <p className=" m-5 text-lg">
                        Gadgets cancun, somos una tienda local ubicada en la localidad de Cancún quintana roo,
                        ofrecemos nuestros productos en esta plataforma, somos confiables, productos de calidad y a muy
                        buen precio.
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-center ">
            <div className=" m-3">
                <BotonGeneral
                    texto={"Administrar productos"}
                />
            </div>
            <div className=" m-3">
                <BotonGeneral
                    texto={"Log out"}
                />
                </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default PerfilVendedor;