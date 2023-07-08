import React from "react";
import { Link } from "react-router-dom";

function CardProducto({ imagen, marca, color, precio, nombre }) {
    return (

        <div className="">
            <div className="bg-[#DFDFDF] h-44 max-w-3xl ml-60 mt-12 rounded-lg" >
                <div className="text-[] flex flex-row " >
                    <div className="m-5"><Link to="">
                        <img className="  rounded-lg " src={imagen} alt="" /></Link>
                    </div>
                    <div className="mt-5"><h1 className="text-[#780072] mt-5 text-xl">{nombre}</h1>
                        <p >Marca: {marca}</p>
                        <p>Color: {color}</p>
                        <p>Precio: {precio} mxn</p></div>
                    <div className="flex flex-row justify-center items-center ml-20 text-center">
                        <Link className=" text-green-600 hover:scale-105 transition-all hover:contrast-125 hover:shadow-1xl " to= ""><i class="bi bi-cart-plus-fill"></i><p>Añadir</p></Link>
                        <Link className="ml-4 text-yellow-500 hover:scale-105 transition-all hover:contrast-125 hover:shadow-1xl" to=""><i class="bi bi-cart-dash-fill"></i><p>Quitar</p></Link>
                        <Link className="ml-4 text-red-500 hover:scale-105 transition-all hover:contrast-125 hover:shadow-1xl" to=""><i class="bi bi-cart-x-fill"></i><p>Eliminar</p></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CardProducto;
