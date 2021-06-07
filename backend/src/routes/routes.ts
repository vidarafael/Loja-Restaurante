import {Router} from 'express'
import {lanche, pizza, prato} from '../controllers/foodController'

const Route = Router()

Route.get('/lanches', lanche)
Route.get('/pizzas', pizza)
Route.get('/pratos', prato)

export default Route


