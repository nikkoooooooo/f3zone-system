import mongoose from "mongoose";

// creating a var called connectDB to have a value of async arrow function
// and that arrow function is connecting our mongo uri password
// from the .env file
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database successfully connected")
    } catch (error) {
        console.log("failed to connect", error)
        process.exit(1)
    }
}


