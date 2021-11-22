import './styles/itemsCards.css';



const ItemListContainer = ({ img, imgdos }) => {
  
    return(
        
        <div class="container-fluid d-flex">
            <div class="card-container">
                <img src={img}></img>
                <p>Esto es una card creada para la prueba de las cosas</p>
            </div>

            <div class="card-container">
                <img src={imgdos}></img>
                <p>Esto es una card creada para la prueba de las cosas</p>
            </div>
        
        </div>
 
   );
}

export default ItemListContainer;