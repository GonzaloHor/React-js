import {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import ItemCounter from '../ItemCounter/ItemCounter';
import { getProducts } from '../../products'






const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        const list = getProducts()
        
        list.then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducts([])
        })

    }, [])


    
    return(

        <div class="container-fluid d-flex">
            <ItemList products={products} />
         </div>
   );
}

export default ItemListContainer;