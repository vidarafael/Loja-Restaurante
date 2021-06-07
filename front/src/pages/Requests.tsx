import React from 'react';
import {Link} from 'react-router-dom'

function Requests() {
  return (
    <>
      <h1>Todos os pedidos</h1>
      <Link to="/menu"><button>Voltar</button></Link>
    </>
  )
}

export default Requests
