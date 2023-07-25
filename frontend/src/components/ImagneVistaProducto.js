import React from "react";


function ImagenVistaProducto({imagen,imagen1,imagen2}){
    return(
        <div className="mb-[250px]  ">
            <div className="bg-transparent rounded-md pt-2 object-cover border w-48 items-center justify-center max-w-2xl m-auto mb-4 w-50 h-40 content-center mt-4 py-2 px-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                <img className="w-50 h-40 object-cover rounded-xl content-center   " src={imagen}/>
            </div>
            <div className="bg-transparent rounded-md pt-2 object-cover border w-48 items-center justify-center max-w-2xl m-auto mb-4 w-50 h-40 content-center mt-4 py-2 px-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                <img className="w-50 h-40 object-cover rounded-xl content-center" src={imagen1}/>
            </div>
            <div className="bg-transparent rounded-md pt-2 object-cover border w-48 items-center justify-center max-w-2xl m-auto mb-4 w-50 h-40 content-center mt-4 py-2 px-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                <img className="w-50 h-40 object-cover rounded-xl content-center" src={imagen2}/>
            </div>  
        </div>
    )
}

export default ImagenVistaProducto;