import './item.css'

import { Link } from "react-router-dom";
import React, { useContext } from 'react';


export const Item = ({ info }) => {

    return (
        <Link to={`/detalle/${info.id}`} className='product'>
            <img src={info.image} alt="" />
            <p>{info.tittle}</p>

        </Link>
    );
}