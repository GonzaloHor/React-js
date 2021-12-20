import { useContext } from 'react'
import CartContext  from '../../context/CartContext'
import CardList from "../CardList/CardList.js"
import './Card.css'
import { formatter } from '../../products'
import { Link } from 'react-router-dom'

function Card() {

    const  { sales,remobeAllItem } = useContext(CartContext)

    let totalPrice = 0;
    let totalPriceSum = ()=>{

    for(let i = 0; i < sales.length;i++){
        totalPrice = totalPrice + (sales[i].price * sales[i].quantity)
    }
} 

totalPriceSum(sales)
    return (
        <>  
            {
                        sales.length === 0 ? 
                        <Link to={'/'} className='mt-4 ir-a-comprar'>
                                <h2 >Ir a comprar</h2>
                        </Link>
                        :
                        <div>
                            <div className='caja-remover'>
                                <h1 className='titulo'>Detalle de tu compra</h1>
                                <button onClick={()=> {remobeAllItem(sales)}}>Remover todos</button>
                            </div>
                            <div className='caja-sales'>
                                <CardList sales={sales} />
                            </div>
                            <div className="mt-4">
                                <h2 className='precioTotal'>Precio total de la compra = {formatter.format(totalPrice)} </h2>
                            </div>
                        </div>
            }
            
        </>
    );
  }
  
  export default Card;
  