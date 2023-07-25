
import React from "react";
import { Link } from "react-router-dom";

function CardAdminProducto({ imagen, marca, color, precio, nombre,linkVer ,linkEditar,linkEliminar}) {
    return (

        <div className="">   
            <div className="bg-[#DFDFDF] h-44 max-w-3xl ml-60 mt-12 rounded-lg" >
                <div className="text-[] flex flex-row " >
                    <div className="m-5"><Link to="">
                        <img className="  rounded-lg " src={imagen} alt="" /></Link>
                    </div>
                    <div className="mt-5"><h1 className="text-[#780072] mt-5 text-xl">{nombre}</h1>
                        <p >Marca: {marca}</p>
                        <p>Color: {color}</p>
                        <p>Precio: {precio} mxn</p></div>
                    <div className="flex flex-row justify-center items-center text-center">
                        <Link to={linkVer}  className="ml-4 text-green-500 " ><box-icon name='basket' color='#5de06f' ></box-icon><p>Visualizar</p></Link>
                        <Link to={linkEditar} className="ml-4 text-yellow-500 " ><box-icon name='edit-alt' color='#ffc109' ></box-icon><p>Editar</p></Link>
                        <Link to={linkEliminar} className="ml-4 text-red-500 " ><box-icon name='x-circle' color='#bb2e2e' ></box-icon><p>Eliminar</p></Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default CardAdminProducto;













