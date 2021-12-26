import {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase'
import { useParams } from 'react-router-dom'; 





const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    

    useEffect(() => {
        if(!categoryId){
            console.log("Este si que bva")
            setLoading(true)
            getDocs(collection(db, 'items')).then((querySnapshot)=>{
                const products = querySnapshot.docs.map(doc =>{
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) =>{
                console.log('Error searching item', error)
            }).finally(()=>{
                setLoading(false)
            })
        } else {
            console.log("Si queiere")
            setLoading(true)
            getDocs(query(collection(db, 'items'), where('category', '==', categoryId))).then((querySnapshot)=>{
                const products = querySnapshot.docs.map(doc =>{
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) =>{
                console.log('Error searching item', error)
            }).finally(()=>{
                setLoading(false)
            })
        }
    

    }, [categoryId])


    
    return(
        <>
        {
            loading === true ? 
            <div className='caja-loading'>
                 <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
            :
            <div class="container-fluid d-flex">
            <ItemList products={products} />
            </div>
        }
        </>
       
   );
}

export default ItemListContainer;