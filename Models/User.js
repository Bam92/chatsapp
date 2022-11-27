// Models/User.js
import mongoose from "../db/connection.js"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 20,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 2048,
    }
})

const User = mongoose.model("user", UserSchema)

export default User