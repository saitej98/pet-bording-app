import React from "react";
import { Route,Routes } from "react-router-dom";
import { CreateEntity } from "../Components/CreateEntity/CreateEntity";
import { Home } from "../Components/Home";
import { Login } from "../Components/loginRegister/Login";
import { Register } from "../Components/loginRegister/Register";
import { Nav } from "../Components/Nav/Nav";
import { ShowEntity } from "../Components/ShowEntity";



export const Routers=()=>{


    return (<div>
        <Nav/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/listing/create" element={<CreateEntity/>} />
            <Route exact path="/listing/:id" element={<ShowEntity/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
        </Routes>
    </div>)
}





