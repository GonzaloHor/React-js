
import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";



const Productos = [
            {  
                id: 1,
                name: "Reloj",
                thumbnail: "https://api.lorem.space/image/watch?w=300&h=300",
                category: "Los mejores relojes de todo Liniers",
                price: 80000,
                title: "Reloj",
                stock: 10
            },
            {  
                id: 2,
                name: "Celular",
                thumbnail: "https://api.lorem.space/image/shoes?w=300&h=300",
                category: "Las mejores Zapatillas del mundo",
                price: 7600,
                title: "Zapatillas",
                stock: 20
            },
            {  
             
                id: 3,
                name: "Ropa",
                thumbnail: "https://api.lorem.space/image/fashion?w=300&h=300",
                category: "Ropa bien facherita para este verano",
                price: 5500,
                title: "Ropa",
                stock: 7
                
            }
        ];


function crearPromesa(idReq) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const itemRequest = Productos.find((element)=>{
                return element.id === idReq;
            })

            itemRequest ? resolve(itemRequest) : reject( new Error ("Item no econtrado"))
        }, 500);

    })

}



function ItemDetailContainer({itemId}){
    const [item, setItem] = useState(null);
   

    useEffect(()=>{
        let requestDatos = crearPromesa(itemId);

        requestDatos.then(function(item_promise) {
            setItem(item_promise)
        })
        .catch(function(error){
            console.log(error)
        })
        .finally(function (){
            console.log("Pormesa terminada")
        });

    }, []);

    return(
        <div>
            {item !== null ?
            <ItemDetail 
                item={item.id}
                title={item.title}
                price={item.price}
                category={item.category}
                stock={item.stock}
                img={item.thumbnail}
            />
                :
                <span>Cargando.....</span>
            }
        </div>
    )


}

export default ItemDetailContainer;