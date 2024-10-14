const express = require("express")
const route = express.Router();
const {signin, signup, getUserDetails, updateUserDetails} = require("../controller/user")


route.post("/signup", signup)
route.post("/login", signin)
route.get("/getuserdetails/:userId", getUserDetails)
route.post("/update-userdetails/:userId", updateUserDetails)

module.exports = route;