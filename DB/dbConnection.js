const mongoose = require("mongoose")


const dbConnection = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/database-48")
        console.log("mongodb connected successfylly")
    } catch (error) {
        console.log("Error in connection", error)
    }
}

module.exports = dbConnection;