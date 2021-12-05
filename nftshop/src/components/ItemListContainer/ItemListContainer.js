import {useState, useEffect} from 'react';
import './ItemsListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import ItemCounter from '../ItemCounter/ItemCounter';






const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')


    // useEffect(() =>{
    //     fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celulares}`)
    //     .then(response =>{
    //         return response.json()
    //     }).then(res =>{
    //         setProducts(res.results.slice(0,10))
    //     })
    // }, [])

       const buscarProducto = () =>{
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response =>{
            return response.json()
        }).then(res =>{
            setProducts(res.results.slice(0,10))
        })
    }

 
    return(

        <div class="container-fluid d-flex contenedor-principal">
            <div className="mt-4 ms-4">
            <input type="text" onChange={(evt) => setInput(evt.target.value)}/>
            <button className="btn btn-primary ms-4" onClick={buscarProducto}>Buscar Producto</button> 

            </div>
            <ItemList products={products} />

         </div>
   );
}

export default ItemListContainer;