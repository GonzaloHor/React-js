import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import './ItemDetail.css';
import arrowReturn from './img/undo.png'
import { Link } from 'react-router-dom'
import {useState, useContext} from 'react';
import CartContext from '../../context/CartContext'





const ItemDetail = ({ product }) => {

    const [compras, setCompras] = useState(0);

    const  { sales ,setPurchase,addItem,purchase } = useContext(CartContext)

    const addToCart = (cantidadProductos)=> {
        setPurchase(purchase + cantidadProductos);
        setCompras(cantidadProductos);
        addItem(product,cantidadProductos,sales);
    }

    
  
    const sumaSales = (sales)=>{
        let pruchaseQuantity = 0;

        for(let i = 0; i < sales.length;i++){
            pruchaseQuantity = pruchaseQuantity + sales[i].quantity
        }


        setPurchase(pruchaseQuantity)
        console.log(pruchaseQuantity)
       
    }





    return(

        <div className="contenedor-detalle">

        <div className="cajaImagen">
            <div className="arrow-return">
            <Link to={`/`}><img src={arrowReturn} alt="" /></Link>
            </div>
            <h1 className="mt-2">{product?.title}</h1>
            <div  >
                <img src={product?.thumbnail} className="imagen" alt="" />
            </div>
        </div>

        <div>
            <h1>$ {product?.price}</h1>
            <h1 className="descripción">{product?.description}</h1>
            <div className="d-flex justify-content-center">
        

                {
                
                compras === 0 
                ?  
                
                <div className="caja-contador">
                <ItemCounter inital={1} stock={product?.stock} onConfirm={addToCart}/>
                </div> 
                    
                    :   
                
                    <div className="caja-ir-compra">
                    <h3>¡Agregaste {compras} productos al carrito!</h3>
                    <Link to={`/`} className="bnt-reset" >Continuar comprando</Link>
                    <Link to={`/card`} className="bnt-reset" >Terminar compra</Link>

                    </div> 
                    
                } 
        </div>
           
        </div>
       
    </div>       
    )
}
   
export default ItemDetail