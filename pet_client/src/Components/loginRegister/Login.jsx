
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const initState={
    email:"",
    password:""
}

export const Login=()=>{
    const [login,setLogin] = useState(initState)
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {id,value}=e.target;
        setLogin({...login,[id]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://pet-boarding.herokuapp.com/user/login",login)
        .then((res)=>{
            // console.log(res.data)
            alert("Login Successful!")
            navigate("/")
        })
    }

    return <div>
        <h1>Login</h1>
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