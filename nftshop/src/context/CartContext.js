import React, { useState } from "react";

const Context = React.createContext()

export const CartContextProvider = ({children}) =>{

    const [sales, setSales] = useState([]);
    const [purchase, setPurchase] = useState(0);

    const remobeItem = (sales, sale) =>{

        let newSales = sales.filter(function(sales) {
            return sales.id !== sale.id; 
        });
        setSales(newSales)
        setPurchase(sales.length - 1)
    } 

    const remobeAllItem = (sales) =>{
        for (let i = sales.length; i > 0; i--) {
            sales.pop();
          }
        setSales(sales)
        setPurchase(sales.length)
    }
   
    return (
        <Context.Provider value={{
            setSales, sales, setPurchase, purchase,remobeItem,remobeAllItem
        }}>
            {children}
        </Context.Provider>
    )

}

export default Context