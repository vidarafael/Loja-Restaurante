import React from 'react';
import '../styles/components/total.css'

export function Total(props: any) {
  return (
    <div className="div-total">
      <div></div>
      <span>Total: R${props.accumulator.toFixed(2)}</span>
      <button>Finalizar Pedido</button>
    </div>
  )
}

