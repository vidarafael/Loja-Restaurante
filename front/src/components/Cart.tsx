import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux'
import { BiCart } from "react-icons/bi"
import { Link } from 'react-router-dom'
import '../styles/cart.css'


interface IFoodNew {
  id: string,
  nome: string, 
  valor: number, 
  food: string,
  quantidade: number,
}

function Cart(props: any) {
  const state = useSelector(state => state) as IFoodNew[]
  const verifyState = state.find(it => it)
  const elementosStateQuantidade = state.reduce((accumulator: any, item: any) => {
    const quantity = item.quantidade
    return accumulator + quantity
  }, 0)

  const acumulador = state.reduce((accumulator: any, item: any) => {
    const remember = item.valor * item.quantidade
    return accumulator + remember
  }, 0)

  useEffect(() => {
    console.log(state)
  }, [])


  return (
    <>
      {verifyState ? 
      <Link className="link" to="/pedidos">
        <div className="content-cart">
          <div>
            <span>
              <BiCart /> {elementosStateQuantidade} pedidos
            </span>
          </div>

          <div className="">
             Total: R$ {acumulador.toFixed(2)}
          </div>
        </div>
      </Link>  : 
      <></>}
    </>
  )
}

export default Cart