import express from "express"
import { login, logout, signup } from "../controller/adminController.js";
import { checkAuth } from "../middleware/authMiddleware.js";



const routes = express.Router();


routes.post("/signup", signup)
routes.get("/check", checkAuth)
routes.post("/login", login)
routes.get("/logout", logout)



export default routes;