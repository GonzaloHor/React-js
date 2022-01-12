import {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase'
import { useParams } from 'react-router-dom'; 





const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    

    useEffect(() => {
        if(!categoryId){
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
                 <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
            :
            <div className="container-fluid d-flex">
            <ItemList products={products} />
            </div>
        }
        </>
       
   );
}

export default ItemListContainer;