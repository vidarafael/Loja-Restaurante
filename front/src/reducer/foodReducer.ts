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
      const currentItem = state.find((it: any) => it.id === action.payload.id )
      if(!currentItem) {
        return [...state, action.payload]
      } else {
        return state.map((item: any) => {
          if(item.id === currentItem.id) {
            item.quantidade += 1
          }
          return item
        })
      }
    
    case 'DECREMENT_QUANTITY':
      const currentItemDecrement = state.find((item: any) => item.id === action.payload)
      if(currentItemDecrement.quantidade <= 1) {
        return state.filter((item: any) => item.id !== action.payload)
      }else {
        return state.map((item: any) => {
          if(item.id === action.payload) {
            item.quantidade -= 1
          }
          return item
        })
      }
      
  
    default:
      return state;
  }
}

export default foodReducer

