import React from 'react';
import {Link} from 'react-router-dom'

function MenuPage() {
  return (
    <>
      <h1>Página de Pedidos</h1>
      <Link to="/"><button>Voltar pra home page</button></Link>
      <Link to="/pedidos"><button>Todos os Pedidos</button></Link>
      <div>
        <br/>
        <button>Pratos</button>
        <button>Lanches</button>
        <button>Pizzas</button>
      </div>
    </>
  )
}

export default MenuPage