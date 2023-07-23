import React from "react";
import { Link } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import { BiCartDownload } from "react-icons/bi";
import { BiX } from "react-icons/bi";
function CardProducto({ imagen, marca, color, precio, nombre }) {
    return (

        <div className="">
            <div className="bg-[#DFDFDF] h-44 max-w-3xl ml-60 mt-12 rounded-lg" >
                <div className="text-[] flex flex-row " >
                    <div className="m-3"><Link to="">
                        <img className="  rounded-lg " src={imagen} alt="" /></Link>
                    </div>
                    <div className=""><h1 className="text-[#780072] mt-5 text-xl">{nombre}</h1>
                        <p >Marca: {marca}</p>
                        <p>Color: {color}</p>
                        <p>Precio: {precio} mxn</p></div>
                    <div className="flex flex-row justify-center items-center ml-20 ">
                        <Link className=" text-green-600 hover:scale-105 transition-all hover:contrast-125 hover:shadow-1xl " to= ""><BiCartAdd className=" ml-4"/><p>Añadir</p></Link>
                        <Link className="ml-4 text-yellow-500 hover:scale-105 transition-all hover:contrast-125 hover:shadow-1xl" to=""><BiCartDownload className=" ml-4"/><p>Quitar</p></Link>
                        <Link className="ml-4 text-red-500 hover:scale-105 transition-all hover:contrast-125 hover:shadow-1xl" to=""><BiX className=" ml-4"/><p>Eliminar</p></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CardProducto;
