import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ItemCart } from "../ItemCart/itemCart";

export const Carrito = () => {
    const { cart, precioTotal } = useCartContext();

    const order = {
        buyer: {
            name: 'Matias',
            email: 'matute@gmail.com',
            phone: '12345',
            address: 'calle falsa 426'
        },
        items: cart.map(product => ({ id: product.id, tittle: product.tittle, price: product.price, quantity: product.quantity })),
        total: precioTotal(),
    };

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <div className="info_text">
                <p>NO EXISTEN ELEMENTOS EN EL CARRITO</p>
                <Link to='/'>Ir a comprar</Link>
            </div>
        );
    }

    return (

        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                TOTAL DE LA COMPRA: U$D{precioTotal()}
            </p>
            <button onClick={handleClick}>Generar Orden de compra</button>
        </div>
    )
}