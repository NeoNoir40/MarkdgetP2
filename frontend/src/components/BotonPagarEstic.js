import React from "react";
import BotonGeneral from "./BontonGeneral";
import { Link } from "react-router-dom";

function BotonPagarEstatic({id_producto}) {
    return (



        
            <div className="w-60 h-72 bg-[#DFDFDF] rounded-lg ml-[200px] mb-[100px] text-center">
                <div className="mb-5">
                    <div>
                        <br/>
                        <br/>
                    <h1 className="font-bold text-[20px] text-[#9B03A8]">Realizar compra</h1>
                    <p className="mt-3 text-black">Ir a paserala de pago</p>
                   <Link to={`/PasarelaPago?=${id_producto}`} > <button  className="bg-fuchsia-900 rounded-md mt-4 text-white mb-3 py-2 px-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ">Pagar</button></Link> 
                    </div>
                </div>
            </div>
    );
}

export default BotonPagarEstatic;