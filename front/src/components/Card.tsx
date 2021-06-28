import react from 'react';
import '../styles/card.css'

export function Card({...props}) {
  return (
    <div className="card">
      <span className="nameTitleFood">{props.name}</span>
      <div>
        <img src={props.image} alt="imagem da comida" />

      </div>
      <div>
       <b>Valor:</b>  R${props.value}
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}