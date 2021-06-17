import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {ADD_REQUEST} from '../actions/foodAction'
import { IFood } from '../models/Food'

interface ParamTypes {
  food: string
}

function Foods(): JSX.Element {

  const dispatch = useDispatch() 

  const [food, setFood] = useState([])
  const params = useParams<ParamTypes>().food
  
  useEffect(() => {
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

  function handleClick(item: IFood) {
    console.log(item, food)
    
  }

  return (
    <>
      <ul>
        {food.map((it: IFood, index) => 
          <li key={index}>
            {it.nome}, valor: {it.custo} <button onClick={() => {dispatch(ADD_REQUEST(it))}}>+</button>
          </li>)}
      </ul>
    </>
  )
}

export default Foods