import mongoose from "mongoose";

// this is where we design our customer schema
// means how the data would look like 
const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    plan:{
        type: String,
        default: "student-1mo",
        required: true
    }
}, {timestamps: true})


const Customer = mongoose.model("Customer", customerSchema)

export default Customer;