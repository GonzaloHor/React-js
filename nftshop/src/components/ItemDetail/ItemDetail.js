import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import './ItemDetail.css';
import arrowReturn from './img/undo.png'
import { Link } from 'react-router-dom'


const ItemDetail = ({ product }) => {

    return(

        <div className="contenedor-detalle">
        <div className="arrow-return">
        <Link to={`/`}><img src={arrowReturn} alt="" /></Link>
        </div>
        <h1 className="mt-2">{product?.title}</h1>
        <div  >
            <img src={product?.thumbnail} className="imagen" alt="" />
        </div>
        <h1>$ {product?.price}</h1>
        <h1 className="descripción">{product?.description}</h1>
        <div className="d-flex justify-content-center">
        <ItemCounter inital={1} stock={product?.stock}/>
        </div>
       
    </div>       
    )
}
   
export default ItemDetail