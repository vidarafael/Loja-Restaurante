import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs"
import {useDispatch} from 'react-redux'
import { ADD_REQUEST, DECREMENT_QUANTITY } from '../actions/foodAction';

interface IFoodNew {
  id: string,
  nome: string, 
  custo: number, 
  food: string,
  quantidade: number,
  total: number
}

function Requests() {
  const comidas = useSelector(state => state) as IFoodNew[] 
  const acumulador = comidas.reduce((accumulator: any, item: any) => {
    const remember = item.custo * item.quantidade
    return accumulator + remember
  }, 0)
  useEffect(() => {
    
    console.log("Total:",acumulador)
    console.log(comidas)
  }, [comidas])

  const dispatch = useDispatch()
  
  return (
    <>
      <h1>Todos os pedidos</h1>
      <Link to="/menu/pratos"><button>Voltar</button></Link> 
      <ul>
        {comidas.map((it:IFoodNew, index ) => { 
          return (
            <li key={index}> 
              Nome: {it.nome}
              <div className="div-quantidade">
                Quantidade: {it.quantidade}
                <div className="div-button">
                  <button onClick={() => {dispatch(ADD_REQUEST(it))}} className="buttonIncrements"><BsCaretUpFill/></button>
                  <button onClick={() => {dispatch(DECREMENT_QUANTITY(it.id))}} className="buttonIncrements"><BsCaretDownFill/></button>
                </div>
              </div>
              Valor: R${(it.custo * it.quantidade).toFixed(2)}<br/><br/>
            </li>
          )
        })}
      </ul>

      <div>
        Total: {acumulador}
      </div>
    </>
  )
}

export default Requests
