import { useContext } from 'react'
import CartContext  from '../../context/CartContext'
import CardList from "../CardList/CardList.js"
import './Card.css'

function Card() {

    const  { sales,remobeAllItem } = useContext(CartContext)

    

    return (
        <>
                <div>
                    <div className='caja-remover'>
                        <h1 className='titulo'>Detalle de tu compra</h1>
                        <button onClick={()=> {remobeAllItem(sales)}}>Remover todos</button>
                    </div>
                    <div className='caja-sales'>
                        <CardList sales={sales} />
                    </div>
                
                </div>
           
        </>
    );
  }
  
  export default Card;
  