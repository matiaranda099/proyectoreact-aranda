import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.css"
import { ItemList } from "../ItemList/itemList";
import { useParams } from "react-router-dom";


//1-Traer el servicio de firestore
//2-Crear un puntero al dato que queremos traer
//3-Traer el dato con una promesa




export const ItemListContainer = ({ tittle }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();




    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        }

    }, [categoriaId]);

    return (
        <div className="contenedor">
            {tittle}

            <ItemList data={data} />
        </div>
    )
}