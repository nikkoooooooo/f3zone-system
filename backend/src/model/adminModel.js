import mongoose from "mongoose"
import bcrypt from "bcryptjs"


const adminSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6

    },

}, {timestamps: true})


adminSchema.pre("save", async function(next) {

    if(!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10)

        this.password = await bcrypt.hash(this.password, salt)

        next();
    } catch (error) {
        next(error)
    }
})

// matchpassword method space here!!!!!!!!!!!!!!!!
adminSchema.methods.matchPassword = async function(enteredPassword) {
    const isPasswordCorrect = await bcrypt.compare(enteredPassword, this.password)
    return isPasswordCorrect;
}



const Admin = mongoose.model("Admin", adminSchema)


export default Admin;

