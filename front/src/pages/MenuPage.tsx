import React from 'react';
import {Link} from 'react-router-dom'
import Cart from '../components/Cart'
import {Header} from "../components/Header"
import {Button} from '../components/Button'
import '../styles/pages/menuPage.css'
import { AiFillCaretLeft, AiOutlineShopping } from "react-icons/ai";
import Food from "../Assets/images/Food.png"

function MenuPage() {

  return (
    <>
      <Header>
        <Link to="/"><Button><AiFillCaretLeft/>Inicío</Button></Link>
        <h1>Macarena</h1>
        <Link to="/pedidos"><Button>Ver Pedidos <AiOutlineShopping/></Button></Link>
      </Header>

      <div className="seeMenu">
        <span>Veja Nosso Cardápio </span>
        <img src={Food} alt="imagem de comida" />
        
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