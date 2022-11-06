import React, { useState, useContext } from "react";
import { products } from "../components/ItemListContainer/ItemListContainer";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /*     const addProduct = (item, newQuantity) =>{
            const newCart = cart.filter(prod => prod.id !== item.id);
            newCart.push({...item, quantity: newQuantity});
            setCart(newCart);
        } */

    const addProduct = (item, newQuantity) => {
        const { quantity = 0 } = cart.find(prod => prod.id === item.id) || {};
        const newCart = cart.filter(prod => prod.id !== item.id);
        setCart([...newCart, { ...item, quantity: quantity + newQuantity }])
    }

    console.log('carrito: ', cart)


    const precioTotal = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const productosTotales = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);


    const clearCart = () => setCart([]);

    const estaEnElCarrito = (id) => cart.find(product => product.id === id) ? true : false;

    const removerProducto = (id) => setCart(cart.filter(product => product.id !== id));


    return (
        <CartContext.Provider value={{
            clearCart,
            estaEnElCarrito,
            removerProducto,
            addProduct,
            precioTotal,
            productosTotales,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider