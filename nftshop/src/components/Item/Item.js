import './Item.css'

const Item = ({ product }) => {
  
    return (
        <div className="card-container">
            <div>
                <h2>
                    {product.title}
                </h2>
            </div>
            <img src={product.thumbnail} alt={product.name} className="ItemImg"/>
            <p>
                Categoria: {product.category}
            </p>

            <p>
                Precio: ${product.price}
            </p>
            <button className="btn btn-primary mb-4">Ver detalle</button>
        </div>
    )
}

export default Item

