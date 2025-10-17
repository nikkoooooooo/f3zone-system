import express from "express";
// we import the api controllers in the customer controller file so that we. could use it
import { getAllCustomer, inquireUser } from "../controller/customerController.js";

// we create an instance of express.Router called routes
const routes = express.Router();


// in this part we define our endpoints and methods for our backend
// even tho we have the same endpoints here the '/'
// they still differ when it comes to methods
// becuase the other one use GET and the one is using POST
// and we put our controllers there to act once the data are already in that endpoint
routes.post('/', inquireUser)
routes.get('/', getAllCustomer)




export default routes;