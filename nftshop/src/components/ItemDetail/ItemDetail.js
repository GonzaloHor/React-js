import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import './ItemDetail.css';
import arrowReturn from './img/undo.png'
import { Link } from 'react-router-dom'
import {useState, useContext} from 'react';
import CartContext from '../../context/CartContext'





const ItemDetail = ({ product }) => {

    const [compras, setCompras] = useState(0);
    const [comprasACargar, setComprasACargar] = useState(0);

    const  { setSales,sales } = useContext(CartContext)

    function addToCart(cantidadProductos) {
        setCompras(cantidadProductos)
    }

    
    const addItem = (product, quantity) =>{
    

        Object.defineProperty(product, 'quantity', {
            value: quantity,
          });
    
        setSales([...sales, product])
        console.log(sales);
    }
    





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
      

   
            
            <div className="caja-contador">
            <div className="cantidad-compras">{compras}</div>
            <ItemCounter inital={1} stock={product?.stock} onConfirm={addToCart}/>
            <button className="bnt-reset" disabled={compras <= 0} onClick={()=>{addItem(product,compras)}}>Agregar al carrito</button>
            </div> 
            
        
           
        </div>
       
    </div>       
    )
}
   
export default ItemDetail