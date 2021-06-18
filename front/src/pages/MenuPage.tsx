import React from 'react';
import {Link} from 'react-router-dom'
import Cart from '../components/Cart'

function MenuPage() {

  return (
    <>
      <h1>Página de Pedidos</h1>
      <Link to="/"><button>Voltar pra home page</button></Link>
      <Link to="/pedidos"><button>Todos os Pedidos</button></Link>
      <div>
        <br/>
        <Link to="/menu/pratos"><button>Pratos</button></Link>
        <Link to="/menu/lanches"><button>Lanches</button></Link>
        <Link to="/menu/pizzas"><button>Pizzas</button></Link>
      </div>
        <Cart/>

    </>
  )
}

export default MenuPage