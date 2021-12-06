import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import './ItemDetail.css';


export default function ItemDetail(props){

    return(
        <div className="contenedor-detalle">
        <div  >
            <img src={props.img} className="imagen" alt="" />
        </div>
        <h1>{props.title}</h1>
        <h1>$ {props.price}</h1>
        <h1 className="descripción">{props.category}</h1>
        <div className="d-flex justify-content-center">
        <ItemCounter inital={1} stock={props.stock}/>
        </div>
       
    </div>       
    )
}
   
  