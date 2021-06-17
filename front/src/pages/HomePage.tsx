import React from 'react';
import {Link} from 'react-router-dom'
import Cart from '../components/Cart'

function HomePage() {
  function numberRandom() {
    return Math.random() * 100
  }


  return (
    <>
      <h1>...Página Principal...</h1>
      <Link to="menu/pratos"><button>Fazer Pedido</button></Link>
      <Cart/>
    </>
  )
}

export default HomePage