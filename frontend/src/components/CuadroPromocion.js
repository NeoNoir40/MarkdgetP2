
import React from "react";


function CuadroPromocion ({imagenbtn,texto,titulo}){
    return(
        
        
        <div className="max-w-xl rounded-xl flex justify-center mt-20 mx-auto text-white hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl" style={{ backgroundImage: `url(${imagenbtn})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div >
            <div >
                <h1 className="mt-3 font-bold text-white" >{titulo}</h1>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="bg-fuchsia-900 rounded-md mt-4 text-white mb-3 py-2 px-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">{texto}</button>
            </div>
        </div>
    </div>

    );
}

export default CuadroPromocion;