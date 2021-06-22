import {Router} from 'express'
import { FoodController } from './controllers/foodController'
// import {lanche, pizza, prato} from '../controllers/foodController'

const router = Router()

const foodController = new FoodController

router.post("/food", foodController.createFood)
router.get("/food/:tipo", foodController.getAllFoods)

// Route.get('/lanches', lanche)
// Route.get('/pizzas', pizza)
// Route.get('/pratos', prato)

export default router


