import React from 'react';
import {Link} from 'react-router-dom'
import Cart from '../components/Cart'

function HomePage() {
 
  return (
    <>
      <h1>...Página Principal...</h1>
      <Link to="menu/prato"><button>Fazer Pedido</button></Link>
      <Cart/>
    </>
  )
}

export default HomePage