import React from "react";
import { Link } from "react-router-dom";

function CardProdu({imagen,producto,descripcion,precio}){
    return(
        
        <div className="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl">
            
            <div className="bg-transparent rounded-[20px_20px_0px_0px] pt-2 object-cover border w-48 items-center justify-center max-w-2xl m-auto ">
            <Link to={"/VistaProducto"}><img className="w-50 h-40 object-cover rounded-xl justify-center mx-auto" src={imagen}/></Link>
            </div>
            <div className=" rounded-[0px_0px_20px_20px] pt-2 bg-white w-48 items-center text-center justify-center max-w-2xl m-auto text-semibold">
            <Link to={"/VistaProducto"}><p className="text-semibold">{producto}</p>
                <br/>
                <p className="text-semibold">{descripcion}</p>
                <p className="text-fuschia-700">${precio}</p>
                <br/></Link>
            </div>
            
        </div>
        
    )
}

export default CardProdu;