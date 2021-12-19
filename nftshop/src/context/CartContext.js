import React, { useState } from "react";

const Context = React.createContext()

export const CartContextProvider = ({children}) =>{

    const [sales, setSales] = useState([]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState({});




   
    return (
        <Context.Provider value={{
            setSales, sales
        }}>
            {children}
        </Context.Provider>
    )

}

export default Context