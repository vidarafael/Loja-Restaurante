import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

interface IFoodNew {
  nome: string, 
  custo: number, 
  food: string,
  quantidade: number
}

function Requests() {
  const comidas = useSelector(state => state) as IFoodNew[] 
  return (
    <>
      <h1>Todos os pedidos</h1>
      <Link to="/menu/pratos"><button>Voltar</button></Link>
      {comidas.map((it: IFoodNew) => { 
        return <li>{it.nome}, Preço: {it.custo}, quantidade: {it.quantidade}</li>
      })}
    </>
  )
}

export default Requests
