import React from 'react';
import {Link} from 'react-router-dom'
import Cart from '../components/Cart'
import '../styles/pages/homePage.css'
import cooking from '../Assets/images/cooking.svg'
import { RiRestaurantFill, RiRestaurant2Fill } from 'react-icons/ri'
import { Slide } from '../components/Slide'

function HomePage() {
 
  return (
    <>
      <header className="header-home">
        <h1><RiRestaurantFill/> Macarena Foods <RiRestaurant2Fill/></h1>
      </header>
      
      <div className="div-content">
        <div className="div-sobre">
          <h1>Sobre Nós</h1>
          <span>
            Somos um Restaurante especializado em diversos tipos de comida,
            desde pratos principais até lanches,
            comida com muito amor e carinho é aqui.<br />
            Macarena Foods.
          </span>
        </div>
        <div className="div-img">
          <img src={cooking} alt="imagem de comida" />
        </div> 
      </div>

      <div className="title-slide">
        <div>
         <h1>Venha Conferir nosso Cardápio</h1>
        </div>
      </div>
      <Slide/>
      
      <Link to="menu/prato"><button>Fazer Pedido</button></Link>


      <Cart/>
    </>
  )
}

export default HomePage