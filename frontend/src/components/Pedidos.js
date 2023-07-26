import React from "react";

function Pedidos(producto, fecha, cliente, pedido, total) {
    return (
        <div>
            <div className=" square w-80 h-80 rounded-[10px_10px_10px_10px]">
                <div>
                    <h1 className=" text-1xl text-black">Pedidos</h1>
                </div>
                <div>
                    <p>Nombre del producto: {producto}</p>
                </div>
                <div>
                    <p>Fecha de pedido: {fecha}</p>
                </div>
                <div>
                    <p>Lo pidió: {cliente}</p>
                </div>
                <div>
                    <p>Pedido No. {pedido}</p>
                </div>
                <div>
                    <p>TOTAL: {total}</p>
                </div>
            </div>
        </div>
    )
}

export default Pedidos;