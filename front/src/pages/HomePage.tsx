import React from 'react';
import {Link} from 'react-router-dom'
import Cart from '../components/Cart'
import {Header} from "../components/Header"

function HomePage() {
 
  return (
    <>
      <Header>
        <h1>...Página Principal...</h1>
      </Header>
      <Link to="menu/prato"><button>Fazer Pedido</button></Link>
      <Cart/>
    </>
  )
}

export default HomePage