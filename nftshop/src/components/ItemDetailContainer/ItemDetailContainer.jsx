
import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { getProductById } from '../../products' ;
import { useParams } from "react-router";
import { db } from "../../services/firebase/firebase";
import { getDoc, doc } from "firebase/firestore";




const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)
    const { paramId } = useParams()


    useEffect(() => {
       setLoading(true)
       getDoc(doc(db, 'items', paramId)).then((querySnapshot)=>{
        const product = { id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(product)
        console.log(product)

    }).catch((error) =>{
        console.log('Error searching item', error)
    }).finally(()=>{
        setLoading(false)
    })


    

    }, [paramId])

    return(
        <div>
          {
            loading === true ? 
            <h1>Cargando</h1>
            :
            <ItemDetail product={product}/>
        }
        </div>
    )


}

export default ItemDetailContainer;