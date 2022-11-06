
import './itemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount";
import React, {useState} from "react";
import { useCartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";



export const ItemDetail = ({ data }) => {
    const[irAlCarrito, setIrAlCarrito] = useState(false);

    const {addProduct} = useCartContext()



    const onAdd = (quantity) => {
        setIrAlCarrito(true);
        addProduct(data,quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="'detail_image" src={data.image} />
                <   div className="content">
                    <h1>{data.tittle}</h1>
                    <h4>U$D {data.price}</h4>
                    {
                        irAlCarrito
                            ? <Link to='/carrito/Carrito'>Finalizar compra</Link>
                            : <ItemCount initial={1} stock={8} onAdd={onAdd} />
                    }

                    

                </div>
            </div>
        </div>
    )
}