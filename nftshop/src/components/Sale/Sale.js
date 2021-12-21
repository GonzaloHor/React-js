import { useContext } from 'react'
import './Sale.css'
import CartContext  from '../../context/CartContext'
import { formatter } from '../../products'

const Sale = ({ sale }) => {

    const  { sales,remobeItem } = useContext(CartContext)

    
  
    return (
        <div className="card-containe-sale card-container">
            <img src={sale.thumbnail} alt={sale.name} className="ItemImg"/>
            <h2 className="titulo">
                {sale.title}
            </h2>
            <div className='detalle-sale'>
                <h3>
                    Cantidad: <strong>{sale.quantity}</strong> 
                </h3>
                <p>
                    Precio c/u: {formatter.format(sale.price)}
                </p>
                <p>
                    Precio total: { formatter.format(sale.price * sale.quantity)}
                </p>
               
            </div>
            <div className='btn-delete-sale ms-auto' onClick={() =>{remobeItem(sales,sale)}}><p>x</p></div>

        </div>
    )
}

export default Sale 


