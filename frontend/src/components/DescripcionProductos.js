import React from "react";

function DescripcionProductos({TituloDescProducto, marca,color, descripcion}){
    return(
        <div className=" h-[250px] w-[500px]  flex flex-col mt-11 text-white ">
        <h1 className="font-bold "> {TituloDescProducto}</h1>
        <p className="mt-5" >Fabricante: {marca}</p>
        <p className="mt-5" >Color :{color}</p>
        <div className="mt-5" >
        <p className="text-white" >Descripcion<p>{descripcion }</p></p>
        </div>
    </div>
    );
}

export default DescripcionProductos;