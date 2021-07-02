import react from 'react';
import '../styles/components/card.css'

export function Card({...props}) {
  return (
    <div className="card">
      <span className="nameTitleFood">{props.name}</span>
      <div>
        <img src={props.image} alt="imagem da comida" />

      </div>
      <div>
       <span className="nameValueFood"><b>Valor:</b>  R${props.value}</span>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}