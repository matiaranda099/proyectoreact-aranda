import React from "react";
import './itemCart.css'
import { useCartContext } from "../../context/CartContext";


export const ItemCart = ({ product }) => {
    const { removerProducto } = useCartContext();

    return (
        <div className="itemCart">
            <img src={product.image} alt={product.tittle} />
            <div>
                <p>Titulo: {product.tittle}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio Unitario: U$D {product.price}</p>
                <p>Total: U$D {product.quantity * product.price} </p>
                <button onClick={() => removerProducto(product.id)}>Eliminar</button>
            </div>

        </div>
    )
}