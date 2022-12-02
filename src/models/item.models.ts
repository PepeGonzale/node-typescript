import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interface/car.interface";


const ItemSchema = new Schema<Car>(
    { 
        color: {
            type:String
        },
        gas: {
            type: String,
            // Los unicos valores permitidos
            enum: ["gasoline", "electric"]
        },
        year: {
            type: Number
        },
        description: {
            type:String
        },
        price: {
            type: Number
        }
    },
    {
        timestamps:true,
        versionKey:false,

    }
)
// Primer argumento va a ser el nombnre de la tabla en la base de datos
const ItemModel = model('items', ItemSchema)
export default ItemModel