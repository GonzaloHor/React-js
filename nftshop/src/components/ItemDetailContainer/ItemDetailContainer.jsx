
import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { getProductById } from '../../products' ;
import { useParams } from "react-router";




const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState();
    const { paramId } = useParams()


    useEffect(() => {
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [paramId])

    return(
        <div>
        
            <ItemDetail product={product}/>
              
        </div>
    )


}

export default ItemDetailContainer;