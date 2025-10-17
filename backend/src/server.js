import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "../src/config/db.js"
import customerRoutes from "../src/routes/customerRoutes.js";


// we import dotenv and use dotenv.config to be able to read the var in the .env file
dotenv.config()
// we created an instance of express name app
const app = express()
// import the PORT from .env and store it in var called PORT
const PORT = process.env.PORT || 8000;
// we use cors to be able our frontend and backend connect each other
app.use(cors())
// we use express.json so that our program be able to read JSON data
app.use(express.json())
// we state here our endpoints and import the customerRoutes
// so that if at 'customer' it will go to the customerRoutes 
// and just analyze what method are we requesting
app.use('/api/customer', customerRoutes)



// we connecting here the database first before running the server
// so it wont cause any error and also the best practices
connectDB().then(() => {
        app.listen(PORT, () => {
        console.log("the server is running at port 8000")
        })
    }
)

// routes, controllers, connect to frontend, service page, responsive in MENU, BLOGS PAGE