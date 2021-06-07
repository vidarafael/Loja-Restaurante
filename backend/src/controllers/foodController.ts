import {Request, Response} from 'express'

export function lanche(req:Request, res:Response) {
  const lanches = [
    {sabor: 'BicMac', custo: 24, food: "lanche"},
    {sabor: 'Whopper', custo: 36.99, food: "lanche"},
    {sabor: 'McPicanha', custo: 45.50, food: "lanche"},
    {sabor: 'McFish', custo: 36, food: "lanche"},
    {sabor: 'X-Burguer', custo: 15, food: "lanche"},
    {sabor: 'McDeluxe', custo: 40.99, food: "lanche"}
  ]
  res.send(lanches)
}

export function pizza(req:Request, res:Response) {
  const pizzas = [
    {sabor: 'Queijo', custo: 15, food: "pizza"},
    {sabor: 'Frango', custo: 25, food: "pizza"},
    {sabor: 'Calabresa', custo: 25, food: "pizza"}
  ]
  res.send(pizzas)
}

export function prato(req:Request, res:Response) {
  const pratos = [
    {sabor: 'Macarrão', custo: 25.50, food: "prato"},
    {sabor: 'Parmegiana de frango', custo: 35.50, food: "prato"},
    {sabor: 'Parmegiana de Carne', custo: 29.99, food: "prato"},
    {sabor: 'Lasanha', custo: 25.99, food: "prato"}
  ]
  res.send(pratos)
}