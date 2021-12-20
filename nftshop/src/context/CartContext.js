import React, { useState } from "react";

const Context = React.createContext()

export const CartContextProvider = ({children}) =>{

    const [sales, setSales] = useState([]);
    const [purchase, setPurchase] = useState(0);

   


    const addItem = (product, compras, sales) =>{
        if(sales.length === 0){

            Object.defineProperty(product, 'quantity', {
                value: compras,
                writable: true,
                enumerable: true,
                configurable: true
            });
        
            setSales([...sales, product])
           
        } else {

            let busquedaProducto = sales.find( compra => compra.id === product.id);

            if(busquedaProducto === undefined){

                Object.defineProperty(product, 'quantity', {
                    value: compras,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            
                setSales([...sales, product])
             

            } else {
                Object.defineProperty(busquedaProducto, 'quantity', {
                    value: busquedaProducto.quantity + compras,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
               
             }

        }
       
    }

    const remobeItem = (sales, sale) =>{

        setPurchase(purchase - sale.quantity)
        let newSales = sales.filter(function(sales) {
            return sales.id !== sale.id; 
        });
        setSales(newSales)
       
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
            setSales, sales, setPurchase, purchase,remobeItem,remobeAllItem,addItem
        }}>
            {children}
        </Context.Provider>
    )

}

export default Context