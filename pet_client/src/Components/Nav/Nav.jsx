
import React from "react";
import { Link } from "react-router-dom";

export const Nav=()=>{


    return <div>
        <Link to="/">Home</Link>
        <Link to="/listing/create">Create Entity</Link>
        <Link to="/register" >Register</Link>
        <Link to="/login" >Login</Link>
    </div>
}


