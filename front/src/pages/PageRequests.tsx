import React from 'react';
import {Link} from 'react-router-dom'

function PageRequests() {
  return (
    <>
      <h1>Página de Pedidos</h1>
      <Link to="/"><button>Voltar pra home page</button></Link>
    </>
  )
}

export default PageRequests