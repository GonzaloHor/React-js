import reloj1 from '../src/img/reloj.jpg'
import reloj2 from '../src/img/reloj2.jpg'
import ropa from '../src/img/ropa.jpg'
import zapas from '../src/img/zapas.jpeg'
import zapas2 from '../src/img/zapas2.jpg'


const categories = [
    {id:'celular',description:'Celular'},
    {id:'tablet',description:'Tablet'},
    {id:'notebook',description:'Notebook'}
]

export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)        
    })
}



export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 500)        
    })
}


export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
     
    })
}


export const getProductsByCategory = (category) => {  
    return new Promise((resolve, reject) => {

    })
}



export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
