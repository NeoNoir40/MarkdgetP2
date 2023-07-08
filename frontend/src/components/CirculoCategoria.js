import React from "react";

function CirculoCategoria({imagen,categoria}){
    return(
        <div className="min-h-screen ">
            <div className="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl">      
            <div className="mx-auto h-44">
            <div className="w-40 h-40 rounded-full bg-transparent border mx-auto">
                <img src={imagen} className="h-40 w-40 rounded-full"/>
            </div>
            </div>
            <div>
            <p className="text-center text-white font-semibold">{categoria}</p>
            </div>
            </div>
        </div>
    )
}

export default CirculoCategoria;