import React from 'react';
import {Link} from 'react-router-dom'
import Cart from '../components/Cart'
import {Header} from "../components/Header"
import '../styles/menuPage.css'
import { AiFillCaretLeft, AiOutlineShopping } from "react-icons/ai";
import Food from "../Assets/images/Food.png"

function MenuPage() {

  return (
    <>
      <Header>
        <div className="header-menuPage">
          <Link to="/"><button><AiFillCaretLeft/>Inicío</button></Link>
          <h1>Empresinha</h1>
          <Link to="/pedidos"><button>Ver Pedidos <AiOutlineShopping/></button></Link>
        </div> 
      </Header>

      <div className="seeMenu">
        <h1>Veja Nosso Cardápio</h1>
        <img src={Food} alt="" />
      </div>

      <div className="btn-foods">       
        <Link to="/menu/prato"><button>Pratos</button></Link>
        <Link to="/menu/lanche"><button>Lanches</button></Link>
        <Link to="/menu/pizza"><button>Pizzas</button></Link>
      </div>
      
      <Cart/>
    </>
  )
}

export default MenuPage