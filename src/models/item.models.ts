import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interface/car.interface";


const ItemSchema = new Schema<Car>(
    { 
        name: {
            type: String,
            required: true

        },
        color: {
            type:String,
            required: true
        },
        gas: {
            type: String,
            // Los unicos valores permitidos
            enum: ["gasoline", "electric"],
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type:String,
            required: true
        },
        price: {
            type: Number, 
            required: true
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