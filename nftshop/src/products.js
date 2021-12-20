import reloj1 from '../src/img/reloj.jpg'
import reloj2 from '../src/img/reloj2.jpg'
import ropa from '../src/img/ropa.jpg'
import zapas from '../src/img/zapas.jpeg'
import zapas2 from '../src/img/zapas2.jpg'






const products =   [
    {  
        id: 1,
        name: "Reloj",
        thumbnail: reloj1,
        description: "Los mejores relojes de todo Liniers",
        price: 80000,
        title: "Reloj",
        stock: 10,
        category: "Reloj"
    },
    {  
        id: 2,
        name: "Zapatillas",
        thumbnail: zapas,
        description: "Las mejores Zapatillas del mundo",
        price: 7600,
        title: "Zapatillas",
        stock: 20,
        category: "Zapatillas"
    },
    {  
     
        id: 3,
        name: "Ropa",
        thumbnail: ropa,
        description: "Ropa bien facherita para este verano",
        price: 5500,
        title: "Ropa",
        stock: 7,
        category: "Ropa"
        
    },
    {  
     
        id: 4,
        name: "Ropa",
        thumbnail: "https://api.lorem.space/image/fashion?w=300&h=300",
        description: "Ropa bien facherita para este verano",
        price: 6500,
        title: "Ropa",
        stock: 6,
        category: "Ropa"
        
    },
    {  
        id: 5,
        name: "Zapatillas",
        thumbnail: zapas2,
        description: "Las mejores Zapatillas del mundo",
        price: 7600,
        title: "Zapatillas",
        stock: 20,
        category: "Zapatillas"
    },
    {  
        id: 6,
        name: "Reloj",
        thumbnail: reloj2,
        description: "Los mejores relojes de todo Liniers",
        price: 9000,
        title: "Reloj",
        stock: 10,
        category: "Reloj"
    },
    {  
        id: 7,
        name: "Reloj",
        thumbnail: "https://api.lorem.space/image/watch?w=300&h=300",
        description: "Los mejores relojes de todo Liniers",
        price: 60000,
        title: "Reloj",
        stock: 10,
        category: "Reloj"
    },
    {  
        id: 8,
        name: "Zapatillas",
        thumbnail: "https://api.lorem.space/image/shoes?w=300&h=300",
        description: "Las mejores Zapatillas del mundo",
        price: 7600,
        title: "Zapatillas",
        stock: 20,
        category: "Zapatillas"
    },
];



export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 500)        
    })
}


export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 500)
    })
}


export const getProductsByCategory = (category) => {  
    return new Promise((resolve, reject) => {
        const product = products.filter(prod => prod.category === category)
        setTimeout(() => resolve(product), 500)
    })
}



export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
