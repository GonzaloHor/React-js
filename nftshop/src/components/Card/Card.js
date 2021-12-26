import { useContext,useState } from 'react'
import CartContext  from '../../context/CartContext'
import CardList from "../CardList/CardList.js"
import './Card.css'
import { formatter } from '../../products'
import { Link } from 'react-router-dom'
import { db } from '../../services/firebase/firebase'
import { addDoc, collection, updateDoc, doc, Timestamp, writeBatch, getDoc, DocumentSnapshot} from 'firebase/firestore'


const Card = ()=> {
    let totalPrice = 0;
    
    const  { sales,remobeAllItem,clearContext} = useContext(CartContext)
    const  [ terminar,setTerminar ] = useState(true)
    const  [ confirmar,setConfirmar ] = useState(true)
    const  [ confirmarCompra,setConfirmarCompra ] = useState(true)
    const  [ idCompra,setIdCmpra ] = useState("")
    const  [ buyer,setBuyer ] = useState({
        name: '',
        phone: '',
        emai: ''
    })




    let totalPriceSum = ()=>{
        for(let i = 0; i < sales.length;i++){
            totalPrice = totalPrice + (sales[i].price * sales[i].quantity)
        }
    }    
    totalPriceSum(sales)


    const confirmOrder = ()=>{
        setConfirmarCompra(false)
         
        const objOrder = {
            buyer: buyer,
            items: sales,
            total: totalPrice,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod)=> {
            getDoc(doc(db,'items', prod.id)).then((documentSnapshot) =>{
                if(documentSnapshot.data().stock >= prod.quantity){
                    batch.update(doc(db, 'items', documentSnapshot.id),{
                        stock: documentSnapshot.data().stock - prod.quantity
                    })
                } else{
                    outOfStock.push({id: documentSnapshot.id, ...documentSnapshot.data()})
                }
            })
        })

        if(outOfStock.length === 0){
            addDoc(collection(db, 'orders'), objOrder).then((id)=>{
                batch.commit().then(()=>{
                    setIdCmpra(id.id)
                    clearContext()
                })
            }).catch((error)=>{
                console.log(error)
            })
        }

    }




    const handleInputChange = (event)=>{
        setBuyer({
            ...buyer,
            [event.target.name] : event.target.value

        })
    }

 


    
    return (
        <>
        {
            idCompra === "" ? 
            <>  
            {
                        sales.length === 0 ? 
                        <>  
                            <div className='mt-4 ir-a-comprar'>
                                <Link to={'/'} className='link'>
                                        <h2 >Ir a comprar</h2>
                                </Link>
                            </div>
                           
                        </>
                        :
                        <div>
                            <div className='caja-remover'>
                                <h1 className='titulo'>Detalle de tu compra</h1>
                                
                            </div>
                            <div className='caja-sales'>

                                <CardList sales={sales} />

                            </div>
                            <div className="mt-4">
                                <h2 className='precioTotal'>Precio total de la compra = {formatter.format(totalPrice)} </h2>
                            </div>
                            {

                                terminar === true ?

                                   <div className="mt-4">
                                   <button className='btn-terminar-compra' onClick={()=>{setTerminar(false)}}>Terminar Compra</button>
                                   <button onClick={()=> {remobeAllItem(sales)}} className='bnt-remover'>Remover todos</button>
                                  </div>
                                  :
                                  <>
                                    {
                                        confirmar === true ?  <form className='container container-form' onSubmit={(event)=>{event.preventDefault()}}>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                            <input 
                                            type="text" class="form-control" 
                                            name="name"
                                            onChange={handleInputChange}/>
                                        </div>
                                        
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Telefono</label>
                                            <input 
                                            type="text" 
                                            class="form-control" 
                                            name="phone"  
                                            onChange={handleInputChange}/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Email</label>
                                            <input 
                                            type="email" 
                                            class="form-control"
                                             name="email"
                                             onChange={handleInputChange}/>
                                        </div>
                                            <button type="submit" class=" btn-terminar-compra" disabled={ buyer.name === "" || buyer.phone === ""  || buyer.email === "" } onClick={()=>{setConfirmar(false)}}>Cargar Datos</button>
                                        <div className="mt-4">
                                            <button className='btn-cancelar-compra' onClick={()=>{setTerminar(true)}}>Cancelar</button>
                                        </div>
                                    </form>
                                    :
                                    <>  
                                    {
                                        confirmarCompra === true ? 
                                        <div className='caja-confirmar'>
                                            <div className='cajados'>
                                                <h2>Datos Cargados</h2>
                                                <h3>{buyer.name}</h3>
                                                <h3>{buyer.phone}</h3>
                                                <h3>{buyer.email}</h3>
                                                <div className="mt-4">
                                                    <button className='btn-terminar-compra'  onClick={()=>{confirmOrder()}}>Confirmar Compra</button>
                                                </div>
                                                <div className="mt-4">
                                            <button className='btn-cancelar-compra' onClick={()=>{setConfirmar(true)}}>Modificar datos</button>
                                        </div>
                                            </div>
                                               
                                        </div>
                                        :
                                        <div className='caja-confirmar'>
                                            <div className='cajados'>
                                                <div className='caja-confirmar'><div class="lds-ripple"><div></div><div></div></div></div>
                                            </div> 
                                         </div>
                                    }
                                    </>
                                   
                                        
                                    }
                                 
                                  </>
                         
                            }
                            
                        </div>
            }

            
            
             </>
             :
             <div className='d-flex justify-content-center'> 
             <div className='caja-id-compra'>
                 <h2>El número de orden de tu compra es: {idCompra }</h2>
                 <div>
                    <Link to={'/'} className='seguir-comprando'>
                            <h2 >Seguir comprando</h2>
                            </Link>
                 </div>
                  
             </div>
             </div>
        }
        
        </>
    
    );
  }
  
  export default Card;
  