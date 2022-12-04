import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interface/user.interface";


const UserSchema = new Schema<User>(
   {
    name: {
        required: true,
        type: String
    },
    password: {
        required: true, 
        type: String
    },
    email: {
        required: true, 
        type: String, 
        // Esta propiedad para que no se repita el mismo email en la base de datos
        unique: true
    },
    description: {
        type: String,
        default: "Soy la descripción"
    }
   },
   {
    versionKey: false,
    timestamps: true
   },

)
// Primer argumento va a ser el nombnre de la tabla en la base de datos
const UserModel = model('users', UserSchema)
export default UserModel