import React from "react";

function CardPerfil({ apartado, nombre }) {
    return (
        <div className="mx-auto h-12 mb-2">
            <div className=" flex flex-row">
            <div className="bg-fuchsia-900 w-40 items-center text-center justify-center h-10 pt-2 max-w-6xl m-auto rounded-[7px_0px_0px_7px] mr-0">
                <p className="text-white gap-4">{apartado}</p>
            </div>
            <div className=" bg-white w-96 flex items-center justify-center h-10 pt-0.7 max-w-6xl m-auto rounded-[0px_7px_7px_0px] ml-0 mb">
                <p className="text-black">{nombre}</p>
            </div >
        </div>
        </div>
    )
}

export default CardPerfil;