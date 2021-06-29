import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {ADD_REQUEST} from '../actions/foodAction'
import { IFood } from '../models/Food'
import { Card } from "./Card"

interface ParamTypes {
  food: string
}

function Foods(): JSX.Element {
  const dispatch = useDispatch() 
  const [food, setFood] = useState([])
  const params = useParams<ParamTypes>().food
  
  useEffect(() => {
    console.log(params)
    async function fetchData() {
        try {
            const response = await fetch(
                `http://localhost:3000/${params}`
            );
            const json = await response.json();

            setFood(json.map(function(it: IFood) {
              return it
            }));
        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
}, [params]);

  return (
    <>
      <ul>
        {food.map((it: IFood, index) => 
          <li key={index}>
            {console.log(it)}
            <Card name={it.nome} value={it.valor} image={it.imagem}>
              <button onClick={() => {dispatch(ADD_REQUEST(it))}}>Adicionar +</button>
            </Card>
          </li>)}
      </ul>
    </>
  )
}

export default Foods