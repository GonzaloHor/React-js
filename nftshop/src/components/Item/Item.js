import './Item.css'
import { Link } from 'react-router-dom'
import { formatter } from '../../products'


const Item = ({ product }) => {
  
    return (
        <div className="card-container">
            <img src={product.thumbnail} alt={product.name} className="ItemImg"/>
            <h2 className="titulo">
                {product.title}
            </h2>

            <p>
                Precio: {formatter.format(product.price)}
            </p>
            <Link className='btn btn-primary mb-4' to={`/detail/${product.id}`}>Ver detalle</Link>

            
        </div>
    )
}

export default Item

