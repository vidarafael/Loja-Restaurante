export function ADD_REQUEST(item: any) {
  return {type: "ADD_REQUEST", payload: item}
}

export function  DECREMENT_QUANTITY(id: any) {
  return {type: "DECREMENT_QUANTITY", payload: id}
}