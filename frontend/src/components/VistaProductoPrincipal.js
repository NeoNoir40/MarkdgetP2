import React from "react";


function VistaProductoPrincipal({ imagen, nombre, stock, descripcion, precio }) {
    return (
        <div>
            <div className=" border h-[500px] w-[500px]  " >
                <img className="object-cover rounded-xl content-center m-14  " src={imagen} />
            </div>
            <div>
                <p>{nombre}</p>
            </div>
            <div>
                <p>{descripcion}</p>
            </div>
            <div>
                <p>{precio}</p>
            </div>
            <div>
                <p>{stock}</p>
            </div>
        </div>

    );
}

export default VistaProductoPrincipal;