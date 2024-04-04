import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const createdUser = new User({
            fullname,
            email, 
            password: hashedPassword,
            });
           await createdUser.save();
            res.status(201).json({message: "User created successfully", user: {
                id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
    }});
    } catch (error) {
        console.log("Error" + error.message);
        res.status(500).json({message: "Internal server error"});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid password"});
        } else {
         res.status(200).json({message: "Login successful",user: {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
         }});
        }   
    }
    catch (error) {
        console.log("Error" + error.message);
        res.status(500).json({message: "Internal server error"});
    }
}