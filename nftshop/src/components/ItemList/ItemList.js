import './ItemList.css'
import Item from "../Item/Item.js"

const ItemList = ({products}) => {
  

    return (
        <ul className=" d-flex flex-wrap justify-content-center">
            {products.map(product =><Item key={product.id} product={product}/>)}
        </ul>
    )
}

export default ItemList