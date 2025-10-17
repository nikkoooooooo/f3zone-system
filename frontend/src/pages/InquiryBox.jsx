import React from 'react'
import api from "../lib/axios.js"
import { toast } from "react-toastify"
import { useState } from 'react'

const InquiryBox = () => {
    // we create a use state to track the changes in the multiple values in the form
    const [form, setForm] = useState({
        name: "",
        email: "",
        contact: "",
        plan: "student-1mo"
    })

    // we create a function updating the current value in the inputs
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    // we create a function that will send those values in the 
    // backend once the submit button got triggered
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/customer', form)
            toast.success("customer add successfully")
            console.log(res.data)
        } catch (error) {
            toast.error("error to send")
            console.log(error)
        }
    }


  return (
    // we create a form so that a customer could fill up and 
    // send his/her inquires in the gym admin dashbaord
    <div className='w-full min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#0a0a0a_50%,#e6bc06_50%)] '>
        <form className='min-w-96 text-center border  bg-gray-950' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-semibold text-yellow-500 py-2'>Inquiry Form</h1>
            <p>Please fill out your info below </p>

            {/* input for the name of customer */}
            <div className=' mt-5 flex flex-col gap-5'>
                <div className='flex flex-col items-start px-5'>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='put your name'
                        className='p-2 w-full rounded-md'
                        onChange={handleChange}
                        value={form.name}
                    />
                </div>

                {/* input for the email of customer */}
                <div className='flex flex-col items-start px-5'>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        name='email' 
                        placeholder='put your email' 
                        className='p-2 w-full rounded-md'
                        onChange={handleChange}
                        value={form.email}

                    />
                </div>

                {/* input for the contact of customer */}
                <div className='flex flex-col items-start px-5'>
                    <label>Contact:</label>
                    <input 
                        type="text" 
                        name='contact'  
                        placeholder='put your contact'
                        className='p-2 w-full rounded-md'
                        onChange={handleChange}
                        value={form.contact}

                    />
                </div>

                {/* a dropdown select so that the customer could pick his desire plan */}
                <div>
                     <label>Select Plan:</label>
                    <select name="plan" required className='bg-none' value={form.plan} onChange={handleChange}>
                        <optgroup label="Student">
                        <option value="student-1mo">1 Month - 800</option>
                        <option value="student-3mo">3 Months - 2000</option>
                        <option value="student-6mo">6 Months - 3500</option>
                        <option value="student-1yr">1 Year - 6500</option>
                        </optgroup>

                        <optgroup label="Regular">
                        <option value="regular-1mo">1 Month - 1000</option>
                        <option value="regular-3mo">3 Months - 2500</option>
                        <option value="regular-6mo">6 Months - 4500</option>
                        <option value="regular-1yr">1 Year - 8000</option>
                        </optgroup>
                    </select>
                </div>
            </div>                
            <button className='btn primary my-5 px-12 bg-yellow-500'>Send</button>
        </form>
    </div>
  )
}

export default InquiryBox