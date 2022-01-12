
import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
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
            <div className='caja-loading'>
                 <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
             </div>
            :
            <ItemDetail product={product}/>
        }
        </div>
    )


}

export default ItemDetailContainer;