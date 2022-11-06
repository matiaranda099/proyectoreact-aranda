import "./cartWidget.css"
import React, {useContext} from "react"
import { useCartContext } from "../../context/CartContext"


export const CartWidget = () =>{
    const  {productosTotales} = useCartContext();


    return(
        <div>
            <i className="bi bi-cart-dash-fill cart_widget"></i>
            <span>{productosTotales() || ''}</span>

        </div>

    )
}