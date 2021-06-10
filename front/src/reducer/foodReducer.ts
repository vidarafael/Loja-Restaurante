/* eslint-disable import/no-anonymous-default-export */
interface IFood {
  id: string,
  nome: string, 
  custo: number, 
  food: string
  quantidade: number
}

// interface Action {
//   type: string
//   payload: IFood
// }

function foodReducer(state: IFood[] = [], action: any) {
  switch (action.type) {
    case 'ADD_REQUEST':
      return state.find(item => item.id === action.payload.id)
  
    default:
      return state;
  }
}

export default foodReducer

