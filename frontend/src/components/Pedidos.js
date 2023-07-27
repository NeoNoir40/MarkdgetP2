import React from "react";

const Ticket = ({ orderDetails }) => {
    const { orderId, products, totalAmount, customerInfo, date } = orderDetails;

    return (
        <div className="ticket-container">
            <h2>Ticket de Compra</h2>
            <p>ID del Pedido: {orderId}</p>
            <p>Fecha: {date}</p>
            <p>Cliente: {customerInfo.name}</p>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - Cantidad: {product.quantity} - Precio: ${product.price}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalAmount}</p>
        </div>
    );
}


export default Ticket;