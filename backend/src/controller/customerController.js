import Customer from "../model/customerModel.js"
import nodemailer from "nodemailer";

// this is our api for creating a new customer
//  basically a logic how to take the input value of a customer go to the backend DB
export async function inquireUser(req, res) {
    try {
        const { name, email, contact, plan } = req.body;

        const newCustomer = new Customer({ name, email, contact, plan });
        const saveCustomer = await newCustomer.save()
        
        // we creating a transporter for the gmail
        // and initializing the email user and pass from the .env file
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",  // Gmail SMTP server
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,  // sender Gmail
                pass: process.env.EMAIL_PASS   // App Password
            }
        });


        // this is what will look like our gmail content that gonna send in our recipient
        // from where the gmail coming from or content
        // to the recipient
        // what is the subject of the content 
        // then we send html conataining all the values input by the customer
        const mailOptions = {
            from: `"F3 Zone" <${process.env.EMAIL_USER}>`,
            to: `${process.env.EMAIL_USER}`,
            subject: "New Customer Inquiry",
            html: `
                    <div style="background: linear-gradient(135deg,#0a0a0a 50%,#e6bc06 50%); padding: 20px; font-family: Arial, sans-serif; color: #fff;">
                    <h1 style="color: #ffd700;">F3 Zone - New Inquiry</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Contact:</strong> ${contact}</p>
                    <p><strong>Plan:</strong> ${plan}</p>
                    <p style="margin-top: 20px; font-size: 14px; color: #00000; background-color: rgba(0,0,0,0.7); padding:10px; border-radius:4px;">
                        Please contact the customer as soon as possible.
                    </p>
                    </div>
                `
        };

        // we create here an info var restoing the transporter sending our gmail content
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info.response);



        res.status(200).json({message: "successfully save and send", saveCustomer})
        console.log(req.body)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "error to send", error})
    }
}


// and this is our api for getting all the customers 
// in the database so that it could display in the admin dashboard
export async function getAllCustomer(req, res) {
    try {
        const customers = await Customer.find()
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json({message:'internal error cant access', error})
    }
}