import React, {useEffect, useState} from 'react';
import { useParams, useRouteMatch } from 'react-router-dom'

interface ParamTypes {
  food: string
}

interface Teste {
  sabor: String, 
  custo: Number, 
  food: String
}

function Foods(): JSX.Element {
  const [food, setFood] = useState([])
  const params = useParams<ParamTypes>().food
  // const match = useRouteMatch()
  
  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(
                `http://localhost:3000/${params}`
            );
            const json = await response.json();
            setFood(json.map(function(it: Teste) {
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
        {food.map((it: Teste, index) => <li key={index}>
          {it.sabor}, valor: {it.custo}
          </li>)}
      </ul>
    </>
  )
}

export default Foods