import {getRepository} from "typeorm"
import { Food } from "../models/Food"

interface IFood {
  nome: string;
  valor: number;
  tipo: string;
  imagem: string;
}

class FoodService {
  async createFood({ nome, valor, tipo, imagem }: IFood) {
    const foodsRepository = getRepository(Food)

    if(!nome) {
      throw new Error("Name is empty")
    }

    const foodAlreadyExists = await foodsRepository.findOne({  
      nome
    })

    if(foodAlreadyExists) {
      throw new Error("Food already exists")
    }

    const food = foodsRepository.create({
      nome, 
      valor, 
      tipo,
      imagem
    })

    await foodsRepository.save(food)

    return food
  }

  async getAllFoods(tipo: string) {
    const foodsRepository = getRepository(Food)

    const foodsType = await foodsRepository.find({ tipo })

    if(!foodsType) {
      throw new Error("Type declared in food not exists")
    }

    return foodsType
  }
}

export { FoodService } 