// const http = require("http");


// const server = http.createServer((req,res) => {
//     res.end("Hello world")
// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })

const express = require('express');
const app = express();
const dbConnection = require("./DB/dbConnection")
const userRoutes = require("./routes/user")
const cors = require("cors")

// middleware 

app.use(express.json());
app.use(cors())

dbConnection()

app.use("/api/v1", userRoutes)


app.listen(3001, () => {
    console.log("Server is running on port 3001");
})