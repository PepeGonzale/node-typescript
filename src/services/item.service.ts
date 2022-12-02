import { Car } from "../interface/car.interface"
import ItemModel from "../models/item.models"


const interItem = async (item: Car) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert
} 

export { interItem }