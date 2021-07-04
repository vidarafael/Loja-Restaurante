import React from 'react';
import '../styles/components/noItens.css'
import {Link} from 'react-router-dom'
import { BiShoppingBag } from 'react-icons/bi'
import { BsFillExclamationCircleFill } from "react-icons/bs"

export function NoItens() {
  return (
    <div className="div-container">
      <div className="box">
        <div className="alert"><BsFillExclamationCircleFill size={32}/></div>
        <h1><BiShoppingBag size={55}/>Sacola Vazia :( </h1>
        <span>Para voltar as compras</span>
        <span><b>Acesse: <Link to="/menu/prato">menu</Link></b></span>
      </div>
    </div>
  )
}