import React from "react";
import { Link } from "react-router-dom";

function BotonSec({texto,tipo,link}){
    return(
        
        <div className="flex justify-center">
        <Link className="" to={link}><button type={tipo} className="bg-fuchsia-900 rounded-md mt-4 text-white mb-3 py-2 px-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ">{texto}</button></Link>
    </div>

    );
}
export default BotonSec;
//