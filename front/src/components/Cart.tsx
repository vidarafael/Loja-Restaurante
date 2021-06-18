import React from 'react';
import {  useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'


interface IFoodNew {
  id: string,
  nome: string, 
  custo: number, 
  food: string,
  quantidade: number,
  total: number
}

function Cart(props: any) {
  const state = useSelector(state => state) as IFoodNew[]
  const verifyState = state.find(it => it)
  const elementosState = state.reduce((accumulator: any, item: any) => {
    const quantity = item.quantidade
    return accumulator + quantity
  }, 0)


  return (
    <>
      {verifyState ? <Link className="link" to="/pedidos"><button className="Cart"><FaShoppingCart/>{elementosState}</button></Link>  : <></>}
    </>
  )
}

export default Cart