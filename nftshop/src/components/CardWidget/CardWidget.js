import '../NavBar/NavBar.css'
import carrito from './img/anadir-al-carrito.png'







const ImgNavBar = () => {
  
    return(

        <div class="photo">
            <img src={carrito} alt="NFT Shop" class="img-cardWidget" />
            <p className="cantidadProductosCard">0</p>
        </div>
 
   );
}

export default ImgNavBar;