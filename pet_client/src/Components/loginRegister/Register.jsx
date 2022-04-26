
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const initState={
    email:"",
    password:""
}

export const Register=()=>{
    const [register,setRegister] = useState(initState)
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {id,value}=e.target;
        setRegister({...register,[id]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://pet-boarding.herokuapp.com/user/register",register)
        .then((res)=>{
            // console.log(res.data)
            alert("Registration successful!")
            navigate("/login")
        })
    }

    return <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label> Email : 
                <input type="text" id="email" onChange={handleChange} required />

            </label>
            <label> Password : 
                <input type="text" id="password" onChange={handleChange} required />

            </label>
            <input type="submit"  />
        </form>
    </div>
}