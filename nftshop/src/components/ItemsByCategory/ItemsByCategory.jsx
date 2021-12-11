import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.js';
import { getProductsByCategory } from '../../products'
import { useParams } from "react-router";






const ItemsByCategory = () => {

    const [products, setProducts] = useState([]);
    

    const { categoryid } = useParams()


    useEffect(() => {
        getProductsByCategory(categoryid).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducts()
        })

    }, [categoryid])

    
    return(

        <div class="container-fluid d-flex">
            <ItemList products={products} />
         </div>
   );
}

export default ItemsByCategory;