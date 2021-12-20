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

    const  { setSales, sales ,setPurchase } = useContext(CartContext)

    function addToCart(cantidadProductos) {
        setCompras(cantidadProductos)
    }

    
    const addItem = (product, compras, sales) =>{


        if(sales.length === 0){

            Object.defineProperty(product, 'quantity', {
                value: compras,
                writable: true,
                enumerable: true,
                configurable: true
            });
        
            setSales([...sales, product])
            setPurchase(sales.length + 1)

        } else {

            let busquedaProducto = sales.find( compra => compra.id === product.id);

            if(busquedaProducto === undefined){

                Object.defineProperty(product, 'quantity', {
                    value: compras,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            
                setSales([...sales, product])
                setPurchase(sales.length + 1)

            } else {
                Object.defineProperty(busquedaProducto, 'quantity', {
                    value: busquedaProducto.quantity + compras,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }

        }
    

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
                
                comprasACargar === 0 
                ?  
                
                <div className="caja-contador">
                <div className="cantidad-compras">{compras}</div>
                <ItemCounter inital={1} stock={product?.stock} onConfirm={addToCart}/>
                <button className="bnt-reset" disabled={compras <= 0} onClick={()=>{addItem(product,compras,sales);setComprasACargar(compras)}}>Agregar al carrito</button>
                </div> 
                    
                    :   
                
                    <div className="caja-ir-compra">
                    <h3>¡Agregaste {comprasACargar} productos al carrito!</h3>
                    <Link to={`/card`} className="bnt-reset" >Ir al carrito</Link>
                    </div> 
                    
                } 
        </div>
           
        </div>
       
    </div>       
    )
}
   
export default ItemDetail