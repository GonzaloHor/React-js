import './styles/NavBar.css'
import cripto from './img/cripto.png'
import consola from './img/consola-de-juego.png'
import arte from './img/nft.png'
import ImgNavBar from './CardWidget.js'





const NavBar = () => {

    return(
         <header class="menu-collapsed sidemenu" id="sidemenu">
        
            <div class="header">
                <div class="title"><span>Un Nuevo Mundo</span></div>
                <div class="menu-btn" id="menu-btn">
                    <div class="btn-hamburger"></div>
                    <div class="btn-hamburger"></div>
                    <div class="btn-hamburger"></div>
                </div>
            </div>

        
            <div class="profile">
                <ImgNavBar />
                <div class="name"><span>NFT Shop</span></div>
            </div>
   
            <div class="menu-items">
                <div class="item">
                    <div id="btn-submenu" class="btn-submenu">
                        <div class="icon"> <img src={arte} alt="Arte Nft" class="img" /> </div>
                        <div class="title">Arte Nft</div>
                        <ul class="submenu" id="submenu">
                            <a href="#"><li class="subMenuElements">Fotos</li></a>
                            <a href="#"><li class="subMenuElements">Iustraciones</li></a>
                            <a href="#"><li class="subMenuElements">Animaciones</li></a>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <a href="">
                        <div class="icon"> <img src={cripto} alt="Cripto Monedas" class="img" /> </div>
                        <div class="title">Cripto Monedas</div>
                    </a>
                </div>
                <div class="item">
                    <a href="">
                        <div class="icon"> <img src={consola} alt="Juegos Play To Earn" class="img" /> </div>
                        <div class="title">Juegos Play To Earn</div>
                    </a>
                </div>
            </div>
         </header>
   );
}

export default NavBar;