import { useContext } from 'react'
import '../NavBar/NavBar.css'
import carrito from './img/anadir-al-carrito.png'
import { Link } from 'react-router-dom'
import CartContext  from '../../context/CartContext'






const ImgNavBar = () => {

    const  { purchase,  } = useContext(CartContext)




  
    return(

        <div class="photo">
            <Link to={'/card'}><img src={carrito} alt="NFT Shop" class="img-cardWidget" /></Link> 
            <p className="cantidadProductosCard">{purchase}</p>
        </div>
 
   );
}

export default ImgNavBar;