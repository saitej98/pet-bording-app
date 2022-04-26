const express = require("express")
const cors=require("cors");
const connect=require("./config/db");
require("dotenv").config()
const cookieParser=require("cookie-parser")
const createEntityController=require("./controllers/createEntityController")
const userController=require("./controllers/userController")

const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
    extended:true
}))

app.use("/pets",createEntityController)
app.use("/user",userController)


const PORT = process.env.PORT  || 3500;
app.listen(PORT, async (req, res) => {
    try {

        await connect()
        console.log(`Listening to Port ${PORT}`)

    } catch (error) {
        console.log(error)
    }
})



