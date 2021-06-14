import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

interface IFoodNew {
  id: string,
  nome: string, 
  custo: number, 
  food: string,
  quantidade: number
}

interface IFood {
  id: string,
  nome: string, 
  custo: number, 
  food: string
}

function Requests() {
  const comidas = useSelector(state => state) as IFoodNew[] 
  useEffect(() => {
    console.log(comidas)
  }, [comidas])
  
  return (
    <>
      <h1>Todos os pedidos</h1>
      <Link to="/menu/pratos"><button>Voltar</button></Link>
      <ul>
        {comidas.map((it:IFoodNew, index ) => { 
          return <li key={index}> Nome: {it.nome} <br/>Quantidade: {it.quantidade}<br/> Valor: {it.custo}<br/><br/></li>
        })}
      </ul>
    </>
  )
}

export default Requests
