import {useState} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import ItemCounter from '../ItemCounter/ItemCounter';





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
                    title: "Celular",
                    stock: 10
                },
                {  
                    id: 2,
                    name: "Celuar",
                    thumbnail: "https://api.lorem.space/image/shoes?w=300&h=300",
                    category: "Zapatillas",
                    price: 7600,
                    title: "Zapatillas",
                    stock: 20
                },
                {  
                 
                    id: 3,
                    name: "Celuar",
                    thumbnail: "https://api.lorem.space/image/fashion?w=300&h=300",
                    category: "Ropa",
                    price: 5500,
                    title: "Ropa",
                    stock: 7
                    
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