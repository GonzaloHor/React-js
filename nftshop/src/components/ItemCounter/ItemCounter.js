import {useState, useRef} from 'react';
import './ItemCounter.css';



function ItemCounter({ stock, inital, onConfirm}) {

  
  
  const [cantidadProducto, setCantidadProducto] = useState(inital);

  



    return (
        <>
                <div>
                      <div className="cantidad-compras">{cantidadProducto}</div>
                    <div>
                      <button id="btn-decrement" disabled={cantidadProducto === 0} className="bnt-decrement" onClick={()=>{setCantidadProducto(cantidadProducto - 1)}}>-</button>
                      
                      <button id="btn-increment" disabled={cantidadProducto === stock} className="bnt-increment" onClick={()=>{setCantidadProducto(cantidadProducto + 1)}}>+</button>
                      {
                      cantidadProducto === stock ? <p className='mt-2'>No hay mas Stock</p> : <p className='mt-2'>Nos quedan {stock} productos</p>
                    }
                    </div>
                    <button className="bnt-reset" disabled={cantidadProducto <= 0} onClick={()=>{onConfirm(cantidadProducto)}}>Agregar al carrito</button>

                </div>
           
        </>
    );
  }
  
  export default ItemCounter;
  