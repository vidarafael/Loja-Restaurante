import {Request, Response} from 'express'

export function lanche(req:Request, res:Response) {
  const lanches = [
    {id: '1l', nome: 'BicMac', custo: 24, food: "lanche", quantidade: 1},
    {id: '2l', nome: 'Whopper', custo: 36.99, food: "lanche", quantidade: 1},
    {id: '3l', nome: 'McPicanha', custo: 45.99, food: "lanche", quantidade: 1},
    {id: '4l', nome: 'McFish', custo: 36, food: "lanche", quantidade: 1},
    {id: '5l', nome: 'X-Burguer', custo: 15, food: "lanche", quantidade: 1},
    {id: '6l', nome: 'McDeluxe', custo: 40.99, food: "lanche", quantidade: 1}
  ]
  res.send(lanches)
}

export function pizza(req:Request, res:Response) {
  const pizzas = [
    {id: '1pz', nome: 'Queijo', custo: 15, food: "pizza", quantidade: 1},
    {id: '2pz', nome: 'Frango', custo: 25, food: "pizza", quantidade: 1},
    {id: '3pz', nome: 'Calabresa', custo: 25, food: "pizza", quantidade: 1}
  ]
  res.send(pizzas)
}

export function prato(req:Request, res:Response) {
  const pratos = [
    {id: '1p', nome: 'Macarrão', custo: 25, food: "prato", quantidade: 1},
    {id: '2p', nome: 'Parmegiana de frango', custo: 35.50, food: "prato", quantidade: 1},
    {id: '3p', nome: 'Parmegiana de Carne', custo: 29.99, food: "prato", quantidade: 1},
    {id: '4p', nome: 'Lasanha', custo: 25.99, food: "prato", quantidade: 1}
  ]
  res.send(pratos)
}