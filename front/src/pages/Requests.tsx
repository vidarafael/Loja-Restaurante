import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineShopping } from "react-icons/ai"
import {useDispatch} from 'react-redux'
import { ADD_REQUEST, DECREMENT_QUANTITY } from '../actions/foodAction';
import {Header} from "../components/Header"
import { Button } from '../components/Button';
import '../styles/pages/requestsPage.css'
import { AiFillCaretLeft } from "react-icons/ai";
import { NoItens } from '../components/NoItens'
import { Total } from '../components/Total'


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
            <li key={index} className="li-requests">  
              <div className="div-nameFood">
                <h1>{it.nome}</h1>
              </div>
              <div className="div-info">
                <img src={it.imagem} alt="imagem da comida" />
                <div className="div-quantidade">
                  <h2>Quantidade:</h2>
                  <div className="div-buttons">
                    <button onClick={() => {dispatch(ADD_REQUEST(it))}} className="buttons-quantidade btn-increment"><AiFillPlusCircle /></button>
                    <span>{it.quantidade}</span> 
                    <button onClick={() => {dispatch(DECREMENT_QUANTITY(it.id))}} className="buttons-quantidade btn-decrement"><AiFillMinusCircle /></button>
                  </div>
                </div>
                <div>
                  <h2 className="valor">Valor: </h2><span className="dinheiro"> R${(it.valor * it.quantidade).toFixed(2)}</span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div>
        {verifyComidas ? <Total accumulator={acumulador}/> : <NoItens/>}
      </div>
    </>
  )
}

export default Requests
