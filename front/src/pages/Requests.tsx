import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

interface IFoodNew {
  id: string,
  nome: string, 
  custo: number, 
  food: string,
  quantidade: number
}

function Requests() {
  const comidas = useSelector(state => state) as IFoodNew[] 
  const novaArr  = comidas.filter((it, i) =>  comidas.indexOf(it) === i)
  useEffect(() => {
    console.log(comidas)
    console.log("esse", novaArr)
  }, [comidas])
  return (
    <>
      <h1>Todos os pedidos</h1>
      <Link to="/menu/pratos"><button>Voltar</button></Link>
      <ul>
        {novaArr.map((it:IFoodNew ) => { 
          return <li> Nome: {it.nome} <br/>Quantidade: {it.quantidade}<br/> Valor: {it.custo}<br/><br/></li>
        })}
      </ul>
    </>
  )
}

export default Requests
