const mongoose = require("mongoose")
let User = mongoose.model("users", {
    firstname: {
        type: String,
        required: true // champe oblg
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: "client"
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
}) //tou5th 2 paramtere 1 para User 2 objet json
module.exports = User