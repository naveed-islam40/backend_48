const User = require("../model/user")



exports.signup = async (req,res) => {
    const {fullName, Email, Password} = req.body;
    console.log(fullName, Email, Password)

    try {
        // creating user in database here
        const user  = new User({
            fullName,
            Email,
            Password,
        })

        await user.save();

        res.status(201).json({mesg: "User created successfully", user})
    } catch (error) {
        res.status(500).json({mesg: "Server Error", err: error})
    }
}

exports.signin = async (req,res) => {
    const {email, password} = req.body;

    const Email = email
    try {
        const user = await User.findOne({Email})

        if(!user){
            return res.status(404).json({mesg: "User not found with this Email, Please signup first"})
        }

        const isPasswordMatch = user.Password === password;

        if(!isPasswordMatch){
            return res.status(401).json({mesg: "Invalid password"})
        }

        return res.status(200).json({mesg: "User loggedIn Successfully", user})

    } catch (error) {
        return res.status(500).json({mesg: "Error in server side", error})
    }
} 

exports.getUserDetails = async(req,res) => {
    const {userId} = req.params;
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({mesg: "User not found"})
        }

        return res.status(200).json({mesg: "User details", user})
    } catch (error) {
        
    }
}

exports.updateUserDetails = async(req,res) => {
    const {userId} = req.params;
    const data = req.body;

    const {fullName, Email} = data.userData;
    const {password} = data;

    let user;
    try {
        if(password){
            user = await User.findByIdAndUpdate(userId, {fullName, Email, Password: password}, {new: true})
        } else {
            user = await User.findByIdAndUpdate(userId, {fullName, Email}, {new: true})
        }
        if(!user){
            return res.status(404).json({mesg: "User not found"})
        }
        return res.status(200).json({mesg: "user details update successfully", user})
    } catch (error) {
        return res.status(500).json({mesg: "Server Error", error})
    }
}


