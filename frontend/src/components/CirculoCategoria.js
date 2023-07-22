import React from "react";

function CirculoCategoria({id,img,categoria}){
    return(
        <div className="min-h-screen ">
            <div className="">      
            <div className="mx-auto h-44">
            <div className="w-40 h-40 rounded-full bg-transparent border mx-auto hover:scale-105 inline-block transition-all hover: contrast-100 hover:shadow-1xl">
                <img src={img} className="h-40 w-40 rounded-full object-scale-down content-center"/>
            </div>
            </div>
            <div>
                <p>{id}</p>
            </div>
            <div>
            <p className="text-center text-white font-semibold">{categoria}</p>
            </div>
            </div>
        </div>
    )
}

export default CirculoCategoria;