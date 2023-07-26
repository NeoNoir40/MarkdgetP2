import React from "react";
import { Link } from "react-router-dom";

function Pedidos({
    precio,
    nombre,
    Direccion,
    producto,
    comprador,

}) {
    return (
    <div className="mt-10 min-h-screen">
        <div className="">
        <div className="ml-4 mr-4">
                    <div className=" bg-transparent border rounded-[20px_20px_20px_20px] pt-4 bg-white w-50 h-96 items-center   justify-center max-w-2xl m-auto text-semibold">
                    <p className="text-semibold text-6xl text-white text-center">PEDIDO</p>
                    <div className= "text-center ">
                        <br />
                        <div className="mt-10">
                        </div>
                        <div>
                        <p className="text-white text-1xl  h-12">Nombre: coronado {nombre}</p>

                        <p className="text-white text-1xl  h-12">Producto Diadema Cloud Perfect Choice Pc 116967 Azul Inalámbrico
: {nombre}
                             {producto}</p>
                        <p className="text-white text-1xl  "> Dirección adsda: <span>{Direccion}</span></p>
                        <br/>
                        <p className="text-semibold text-white">Precio $1000 {precio}</p>

                        </div>
                        <br />
                    </div>
                    </div>
            </div>
            </div>
            </div>
    );
}

export default Pedidos;