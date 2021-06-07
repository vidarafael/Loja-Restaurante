import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'

interface ParamTypes {
  food: string
}

function Foods(): JSX.Element {
  const food = useParams<ParamTypes>().food
  useEffect(() => {
    console.log(food)
  }, [])
  return (
    <>
      <h1>eae</h1>
    </>
  )
}

export default Foods