/* eslint-disable import/no-anonymous-default-export */
// interface IFood {
//   id: string,
//   nome: string, 
//   custo: number, 
//   food: string
//   quantidade: number
// }

// interface Action {
//   type: string
//   payload: IFood
// }

function foodReducer(state:any = [], action: any) {
  switch (action.type) {
    case 'ADD_REQUEST':
      return [...state, action.payload]
  
    default:
      return state;
  }
}

export default foodReducer

