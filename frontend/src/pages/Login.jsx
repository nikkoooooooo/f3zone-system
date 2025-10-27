import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../lib/axios';
import { toast } from "react-toastify"


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const checkAuth = async () => {
            try {
                // we will verify the user/admin if his token is still valid or no
                const res = await axios.get("/auth/check", {
                    withCredentials: true,
                })

                // if yes then direct to the admin if not then proceed to login page
                if (res.data.valid) {
                    window.location.href = "/admin";
                }
            } catch (error) {
                console.log("not logged in or token expired")
            }
        }
        checkAuth();
    }, []) 


    // a function for the button in login page 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");


        try {
            // we send the data put by the user to the login route 
            const res = await axios.post(
                "/auth/login",
                { email, password },
                { withCredentials: true}
            );

            // if success is true then we proceed to the /admin 
            if (res.data.success) {
                toast.success("Login Successfully")
                window.location.href = "/admin";                
            } else {
                toast.error("Login Failed")
                setError(res.data.message || "login failed")
            }

        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");

        } finally {
            setLoading(false);
        }
    }



  return (
    <div className='w-full min-h-screen bg-[linear-gradient(135deg,#0a0a0a_50%,#e6bc06_50%)] flex items-center justify-center'>
        <form action="" className='min-w-96 bg-gray-950 p-5 text-center border' onSubmit={handleSubmit}>
            <h1 className='text-yellow-500 text-center text-4xl font-semibold py-2'>Admin Form</h1>


            <div className='mt-5 flex flex-col gap-5'>
                <div className='flex flex-col items-start px-5'>
                    <label>Gmail: </label>
                    <input 
                        className='w-full p-2 rounded-md'
                        type="text"
                        name='email'
                        placeholder='Type your email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
            </div>


            <div className='mt-5 flex flex-col gap-5'>
                <div className='flex flex-col items-start px-5'>
                    <label>Password: </label>
                    <input 
                        className='w-full p-2 rounded-md'
                        type="password"
                        name='password'
                        placeholder='Type your email'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
            </div>

            
            {error && <p className="text-red-500 mt-3">{error}</p>}


            <button className='btn primary my-5 px-12 bg-yellow-500' type='submit'>
                {loading ? "Logging in..." : "Login"}
            </button>

        </form>
    </div>
  )
}

export default Login