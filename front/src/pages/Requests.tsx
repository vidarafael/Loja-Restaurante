import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs"
import {useDispatch} from 'react-redux'
import { ADD_REQUEST, DECREMENT_QUANTITY } from '../actions/foodAction';
import {Header} from "../components/Header"
import { Button } from '../components/Button';
import '../styles/pages/requestsPage.css'
import { AiFillCaretLeft } from "react-icons/ai";


interface IFoodNew {
  id: string,
  imagem: string,
  nome: string, 
  quantidade: number,
  tipo: string,
  valor: number, 
}

function Requests() {
  const comidas = useSelector(state => state) as IFoodNew[] 
  const acumulador = comidas.reduce((accumulator: any, item: any) => {
    const remember = item.valor * item.quantidade
    return accumulator + remember
  }, 0)
  const verifyComidas = comidas.find(it => it)

  const dispatch = useDispatch()
  
  return (
    <>
      <Header>
        <Link to="/menu/prato"><Button><AiFillCaretLeft/>Voltar</Button></Link> 
        <h1>Todos os pedidos</h1>
        <div></div>
      </Header>
      
      <ul>
        {comidas.map((it:IFoodNew, index ) => { 
          return (
            <li key={index}> 
            {/* <img src={it.imagem} alt="imagem da comida" /> */}
              Nome: {it.nome}
              <div className="div-quantidade">
                Quantidade: {it.quantidade}
                <div className="div-button">
                  <button onClick={() => {dispatch(ADD_REQUEST(it))}} className="buttonIncrements"><BsCaretUpFill/></button>
                  <button onClick={() => {dispatch(DECREMENT_QUANTITY(it.id))}} className="buttonIncrements"><BsCaretDownFill/></button>
                </div>
              </div>
              Valor: R${(it.valor * it.quantidade).toFixed(2)}<br/><br/>
            </li>
          )
        })}
      </ul>

      <div>
        {verifyComidas ? <span> Total: {acumulador.toFixed(2)}</span> : <h1>Sem pedidos :(</h1>}
      </div>
    </>
  )
}

export default Requests
