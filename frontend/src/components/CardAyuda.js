import React from "react";
import { Link } from "react-router-dom";

function CardAyuda ({icon1, titulo, descripcion, enviar,icon2}) {
    return(
        <div>
        <div className="bg-[#DFDFDF] h-38 max-w-3xl ml-60 mt-3 rounded-lg hover:scale-105 transition-all hover:contrast-125 hover:shadow-1xl" >
            <Link className="" to={enviar}>
                    <div className="text-[#9B03A8] flex flex-row items-center" >
                        <div className="m-5 mt-9">
                            {icon1}
                        </div>
                        <div className=" flex-grow">
                            <h1 className="text-[#780072] mt-3 text-2xl">
                            {titulo}
                            </h1>
                            <p className=" text-gray-500 mt-2">{descripcion}</p>
                        </div>
                        <div className=" ml-auto mt-5 mr-5">
                           {icon2}
                        </div>
                    </div>
                    </Link>
                </div>
        </div>
    );
}
export default CardAyuda;