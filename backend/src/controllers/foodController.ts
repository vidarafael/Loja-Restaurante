import {Request, Response} from 'express'

export function lanche(req:Request, res:Response) {
  const lanches = [
    {sabor: 'BicMac', custo: 24, food: "lanche"},
    {sabor: 'Whopper', custo: 20, food: "lanche"}
  ]
  res.send(lanches)
}

export function pizza(req:Request, res:Response) {
  const pizzas = [
    {sabor: 'queijo', custo: 15, food: "pizza"},
    {sabor: 'frango', custo: 25, food: "pizza"}
  ]
  res.send(pizzas)
}

export function prato(req:Request, res:Response) {
  const pratos = [
    {sabor: 'Sushi', custo: 50, food: "prato"},
    {sabor: 'Parmegiana de frango', custo: 30, food: "prato"}
  ]
  res.send(pratos)
}