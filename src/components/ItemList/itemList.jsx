import { Item } from "../Item/item"
import React from "react"

export const ItemList = ({data = []}) =>{
    return(
        data.map(product => <Item key={product.id} info={product} />)
       /*  <Item/> */
    )
}