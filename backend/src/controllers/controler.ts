import {Request, Response} from 'express'

export function lanche(req:Request, res:Response) {
  const lanches = [
    {sabor: 'BicMac', custo: 24},
    {sabor: 'Whopper', custo: 20}
  ]
  res.send(lanches)
}

export function pizza(req:Request, res:Response) {
  const pizzas = [
    {sabor: 'queijo', custo: 15},
    {sabor: 'frango', custo: 25}
  ]
  res.send(pizzas)
}

export function prato(req:Request, res:Response) {
  const pratos = [
    {sabor: 'Sushi', custo: 50},
    {sabor: 'Parmegiana de frango', custo: 30}
  ]
  res.send(pratos)
}