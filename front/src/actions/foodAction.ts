export function ADD_REQUEST(item: any) {
  item.quantidade = 0
  return {type: "ADD_REQUEST", payload: item}
}