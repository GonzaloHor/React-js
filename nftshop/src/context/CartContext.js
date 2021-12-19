import React, { useState } from "react";

const Context = React.createContext()

export const CartContextProvider = ({children}) =>{

    const [sales, setSales] = useState([]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState({});



    const addItem = (product, quantity) =>{
    

        Object.defineProperty(product, 'quantity', {
            value: quantity,
          });
    
        setSales([...sales, product])
        console.log(sales);
    }
    


   
    return (
        <Context.Provider value={{
            setSales, addItem,setProduct,setQuantity
        }}>
            {children}
        </Context.Provider>
    )

}

export default Context