import React from 'react';
import {Link} from 'react-router-dom'
import Cart from '../components/Cart'
import {Header} from "../components/Header"

function MenuPage() {

  return (
    <>
      <Header>
        <h1>Página de Pedidos</h1>
        <Link to="/"><button>Voltar pra home page</button></Link>
        <Link to="/pedidos"><button>Todos os Pedidos</button></Link>
      </Header>
      
      <div>
        <br/>
        <Link to="/menu/prato"><button>Pratos</button></Link>
        <Link to="/menu/lanche"><button>Lanches</button></Link>
        <Link to="/menu/pizza"><button>Pizzas</button></Link>
      </div>
        <Cart/>

    </>
  )
}

export default MenuPage