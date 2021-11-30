import {useState, useRef} from 'react';



function ItemCounter({ stock, inital, img}) {

    const [product, setProduct] = useState(Number(inital));
    const [msgNoStok, setmsgNoStok] = useState("");
    const [btnDisable, setbtnDisable] = useState(false);
    const [btnDisabledos, setbtnDisabledos] = useState(false);


    return (
        <>
            <div class="container-fluid d-flex">
                <div class="card-container">
                    <img src={img}></img>
                    <p>Esto es una card creada para la prueba de las cosas</p>
                    <div className="boxAmount">
                      <h2>Monto</h2>
                      <span>{msgNoStok}</span>
                      <h3>{product}</h3>
                      <button id="btn-decrement" disabled={btnDisable} className="bnt-decrement" onClick={()=>{ 
                          if(product == 0){
                            setbtnDisable(true)
                          } else {
                            setProduct(product - 1)
                            setbtnDisabledos(false)
                            setmsgNoStok("")
                          }
                         }}>Decrementar</button>
                      <button id="btn-increment" disabled={btnDisabledos} className="bnt-increment" onClick={()=>{ 
                          if(product == stock){
                            setbtnDisabledos(true)
                            setmsgNoStok("No hay mas Stock")
                          } else {
                            setProduct(product + 1)
                            setbtnDisable(false)
                            
                          }
                         }}>Incrementar</button>
                      <button className="bnt-reset" onClick={()=>{ setProduct(0)}}>Resetear</button>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default ItemCounter;
  