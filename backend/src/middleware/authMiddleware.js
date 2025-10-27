import Admin from "../model/adminModel.js";
import jwt from "jsonwebtoken";



export async function protect(req, res, next) {
    try {
        const token = req.cookies.jwt;

        if(!token) {
            return res.status(401).json({message: "no token not authorized"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await Admin.findById(decoded.userId).select("-password");

        next()



    } catch (error) {
        return res.status(401).json( { message:" invalid token " } )
    }
}


export async function checkAuth(req, res, next) {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: "No token found" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)


        const user = await Admin.findById(decoded.userId).select("-password")


        if (!user) {
            return res.status(404).json({ message: "User not found"})
        }

        res.json({ valid: true, user})
    } catch (error) {
        res.status(401).json({ message: "Inavalid or expired token"})
    }
}