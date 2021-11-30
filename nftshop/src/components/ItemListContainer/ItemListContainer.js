import {useState} from 'react';
import './itemsCards.css';
import ItemList from '../ItemList/ItemList.js';





const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const promesaProductos = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve( 
                [
                {  
                    id: 1,
                    name: "Celuar",
                    thumbnail: "https://api.lorem.space/image/watch?w=300&h=300",
                    category: "Reloj",
                    price: 80000,
                    title: "Celular"
                },
                {  
                    id: 2,
                    name: "Celuar",
                    thumbnail: "https://api.lorem.space/image/shoes?w=300&h=300",
                    category: "Zapatillas",
                    price: 7600,
                    title: "Zapatillas"
                },
                {  
                 
                    id: 3,
                    name: "Celuar",
                    thumbnail: "https://api.lorem.space/image/fashion?w=300&h=300",
                    category: "Ropa",
                    price: 5500,
                    title: "Ropa"
                }
            ])
        }, 3000);;
    });
    
    promesaProductos.then(res =>{
        setProducts(res)
    });



    
    return(

        <div class="container-fluid d-flex">
            <ItemList products={products} />
         </div>
   );
}

export default ItemListContainer;