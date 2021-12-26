import './NavBar.css'
import relojes from './img/reloj-inteligente.png'
import zapas from './img/zapatillas.png'
import ropa from './img/gancho-de-ropa.png'
import CardWidget from '../CardWidget/CardWidget.js'
import cryptoShop from './img/cryptoShop.png'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CartContext  from '../../context/CartContext'
import { getCategories } from '../../products'






const NavBar = () => {


    const  { sales} = useContext(CartContext)

    return(
         <header class="menu-collapsed sidemenu" id="sidemenu">
        
            <div class="header">
                <a href="/"><img src={cryptoShop} alt="NFT Shop" class="img-header" /> </a>
                <p>El mejor lugar para comprar</p>
            </div>

        
          
   
            <div class="menu-items">

  
                <Link  to={`/category/Ropa`} class="item">
                    <div id="btn-submenu" class="btn-submenu">
                        <div class="icon"> <img src={ropa} alt="Arte Nft" class="img" /> </div>
                        <div class="title">Ropa</div>
                    </div>
                </Link>
                <Link  to={`/category/Reloj`} class="item">
                    <a href="">
                        <div class="icon"> <img src={relojes} alt="Cripto Monedas" class="img" /> </div>
                        <div class="title">Relojes</div>
                    </a>
                </Link>
                <Link  to={`/category/Zapatillas`} class="item">
                    <a href="">
                        <div class="icon"> <img src={zapas} alt="Juegos Play To Earn" class="img" /> </div>
                        <div class="title">Zapatillas</div>
                    </a>
                    </Link>
            </div>

            
          
            {
                   sales.length === 0 ? 
                   <></>
                   :
                   <div class="profile">
                   <CardWidget />
                   </div>
                }
               
         </header>
   );
}

export default NavBar;