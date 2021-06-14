export function ADD_REQUEST(item: any) {
  item.quantidade = 1
  return {type: "ADD_REQUEST", payload: item}
}