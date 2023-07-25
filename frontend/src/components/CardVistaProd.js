import React from "react";
import { Link } from "react-router-dom";

function CardVistaProdu({imagen, titulo, descripcion, enviar1, enviar2}) {
    return (
        <>
            <div className="">
                <div className="bg-[#DFDFDF] h-44 max-w-3xl ml-60 mt-12 rounded-lg" >
                    <div className=" flex " >
                        <div className="m-5">
                            <img className="  rounded-lg " src={imagen} alt="" />
                        </div>
                        <div className="mt-5">
                            <h1 className=" text-green-700 mt-1 text-lg"> Entregado </h1>
                            <h1 className="text-[#780072]  text-xl">{titulo}</h1>
                            <p className=" text-gray-500 mt-2">{descripcion}</p>
                        </div>

                        <div className="flex flex-col ml-auto m-6">
                            <Link className="" to={enviar1}><button type="submit" className="bg-fuchsia-900 rounded-md mt-4 text-white mb-3 py-2 px-6 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                                Ver compra
                            </button>
                            </Link>
                            <Link className="" to={enviar2}><button type="submit" className="bg-fuchsia-900 rounded-md mt-4 text-white mb-3 py-2 px-6 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                                Volver a compra
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardVistaProdu;

