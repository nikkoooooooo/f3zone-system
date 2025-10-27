import Admin from "../model/adminModel.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
    const { email, password, fullName } = req.body;

    try {
        if (!email || !password || !fullName) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }

        if (password.length < 6) {
            return res.status(400).json({message: "password charatcer should be at least 6 character "})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if(!emailRegex.test(email)) {
            return res.status(401).json({ message: "invalid email format"})
        }


        const existingUser = await Admin.findOne({ email });

        if (existingUser) {
            return res.status(400).json({message: "the email already exist, please use a different one"})
        }

        const newUser = await Admin.create({
            email,
            password,
            fullName
        })


        const token = jwt.sign(
            { userId: newUser._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "7d"}
        )

        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        })

        return res.status(200).json({ message: "created new admin!", success: true})

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "error internal server"})
    }
}

export async function login(req, res) {

    // we req in th body an email and password
    const { email, password} = req.body;


    try {
        // if one of them ainot exist we will return 400 and a msg as a res
        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required!"})
        }

        // if they do have both, we will use the gmail to check in the mongodb if 
        // the user is existed
        const user = await Admin.findOne({ email })

        // if not we will send 401 and a not specify msg
        if(!user) {
            return res.status(401).json({ message: "invalid email or password" })
        }


        // checking if the password of that user is correct by using the method in model schema
        const isPasswordCorrect = await user.matchPassword(password);
        if(!isPasswordCorrect) {
            return res.status(401).json({ message: "invalid email or password" })
        }

        // we create token with jwt, to sign with the user payload and jwt secret key
         const token = jwt.sign(
            { userId: user._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "7d"}
        )


        // then response it in the cookie
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        })

        res.status(200).json({ message: "successfully login", success: true})



    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "invalid internal server"})
        
    }
}


// we clearing the cookie if we logout so that the user will need to be authenticate 
// again if he want to be logged in again
export async function logout(req, res) {
    res.clearCookie("jwt");
    res.status(200).json({ success: true, message: " successfully logout"})
}
