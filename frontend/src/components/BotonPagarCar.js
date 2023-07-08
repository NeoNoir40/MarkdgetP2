import { Link } from "react-router-dom";
import React from "react";
import BotonGeneral from "./BontonGeneral";
function BotonPagarCar({ cantidad, direccion, total }) {
    return (
//transform translate-y-[-50%] 
        <div className="flex justify-end items-end">
        <div className="  right-0 top-1/2  fixed transform translate-y-[-50%]  w-60 h-72 bg-[#DFDFDF] mr-80 rounded-lg">
          <div className="border-solid border-[#780072] border-2 text-center rounded-lg text-[#9B03A8]">
            <h1>Resumen compra</h1>
          </div>
          <div className="m-5">
            <h5 className="mt-3">Productos {cantidad}</h5>
            <p className="mt-3 text-black">Direccion: <span className="text-[#9B03A8]">{direccion}</span></p>
            <p className="mt-3">Total: {total} mxn</p>
            <BotonGeneral texto={"Pagar"} link={'/Pasarela_pago'}/>
          </div>
        </div>
      </div>
      
    );
}


export default BotonPagarCar;