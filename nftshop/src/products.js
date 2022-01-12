
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
