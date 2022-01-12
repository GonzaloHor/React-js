import './NavBar.css'
import relojes from './img/reloj-inteligente.png'
import zapas from './img/zapatillas.png'
import ropa from './img/gancho-de-ropa.png'
import CardWidget from '../CardWidget/CardWidget.js'
import cryptoShop from './img/cryptoShop.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext  from '../../context/CartContext'






const NavBar = () => {


    const  { sales} = useContext(CartContext)

    return(
         <header className="menu-collapsed sidemenu" id="sidemenu">
        
            <div className="header">
                <a href="/"><img src={cryptoShop} alt="NFT Shop" className="img-header" /> </a>
                <p>El mejor lugar para comprar</p>
            </div>

        
          
   
            <div className="menu-items">

  
                <Link  to={`/category/Ropa`} className="item">
                    <div id="btn-submenu" className="btn-submenu">
                        <div className="icon"> <img src={ropa} alt="Arte Nft" className="img" /> </div>
                        <div className="title">Ropa</div>
                    </div>
                </Link>
                <Link  to={`/category/Reloj`} className="item">
                    <div className='item-navbar'>
                        <div className="icon"> <img src={relojes} alt="Relojes" className="img" /> </div>
                        <div className="title">Relojes</div>
                    </div>
                </Link>
                <Link  to={`/category/Zapatillas`} className="item">
                    <div className='item-navbar'>
                        <div className="icon"> <img src={zapas} alt="Juegos Play To Earn" className="img" /> </div>
                        <div className="title">Zapatillas</div>
                    </div>
                    </Link>
            </div>

            
          
            {
                   sales.length === 0 ? 
                   <></>
                   :
                   <div className="profile">
                   <CardWidget />
                   </div>
                }
               
         </header>
   );
}

export default NavBar;