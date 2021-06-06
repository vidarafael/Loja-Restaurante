import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <>
      <h1>...Página Principal...</h1>
      <Link to="page2"><button>Fazer Pedido</button></Link>
    </>
  )
}

export default HomePage