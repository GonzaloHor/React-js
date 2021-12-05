import {useState, useRef} from 'react';
import './ItemCounter.css';


function ItemCounter({ stock, inital, img}) {

    const [product, setProduct] = useState(inital);



    return (
        <>
            <div class="container-fluid d-flex">
                <div class="card-container container-couter">
                    <img src={img}></img>
                    {
                      product === stock ? <p>No hay mas Stock</p> : <p>Nos quedan {stock} productos</p>
                    }
                    <div className="boxAmount">
                      <h2>Monto</h2>
                      <h3>{product}</h3>
                      <button id="btn-decrement" disabled={product === 0} className="bnt-decrement" onClick={()=>{setProduct(product - 1)}}>Decrementar</button>
                      <button id="btn-increment" disabled={product === stock} className="bnt-increment" onClick={()=>{setProduct(product + 1)}}>Incrementar</button>
                      <button className="bnt-reset" onClick={()=>{ setProduct(0)}}>Resetear</button>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default ItemCounter;
  