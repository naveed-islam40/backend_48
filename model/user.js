

// creating Schema 

const mongoose  = require("mongoose")

const createAccount = new mongoose.Schema({
   fullName: String,
    Email: String,
    Password: String,
})

// creating model
const User = mongoose.model("User", createAccount)

module.exports = User