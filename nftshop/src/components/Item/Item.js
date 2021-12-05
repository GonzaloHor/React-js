import './Item.css'

const Item = ({ product }) => {
  
    return (
        <div className="card-container">
            <img src={product.thumbnail} alt={product.name} className="ItemImg"/>
            <h2 className="titulo">
                {product.title}
            </h2>

            <p>
                Precio: ${product.price}
            </p>
            <button className="btn btn-primary mb-4">Ver detalle</button>
        </div>
    )
}

export default Item

