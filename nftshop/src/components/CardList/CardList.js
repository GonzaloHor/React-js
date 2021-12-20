import Sale from "../Sale/Sale.js"

const CardList = ({sales = []}) => {
    
  
    return (
        <>
        <ul className=" d-flex flex-wrap justify-content-center container-fluid">
            {
            
            
            sales.map(sale =><Sale key={sale.id} sale={sale}/>)
            
            }
        </ul>
        </>
    )
}

export default CardList
