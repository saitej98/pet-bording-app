const express=require("express");
const User=require("../models/UserModel")
const path=require("path");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const {body,validationResult}=require("express-validator")

const router=express.Router();

const newToken=(user)=>{
        return jwt.sign({user:user},process.env.SECRET_KEY);
}



router.post("/register",
body("email").isEmail().withMessage("Email is required"),
body("password").notEmpty().withMessage("This field is required")
,async(req,res,next)=>{
    try {

        const err=validationResult(req);
        if(!err.isEmpty()){
            return res.send(err.array())
        }
        
        let user=await User.findOne({email:req.body.email}).lean().exec();
        if(user){
            return res.send("Email alredy existed")
        }
        user=await User.create(req.body);
        const token=newToken(user);
        // console.log("insite register",token)
        return res.send({user,token})
        next();
        
        
    } catch (error) {
        return res.send(error)
    }
})


router.post("/login",
body("email").isEmail().withMessage("Email is required"),
body("password").notEmpty().withMessage("This field required"),
async(req,res)=>{
    try {
        const loginErr=validationResult(req);
        if(!loginErr.isEmpty()){
            return res.send(loginErr.array())
        }
        
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return res.send("Email is not regitered")
        }
        
        // console.log("inside login",req.body.password)
        const match=user.checkPassword(req.body.password);
        if(!match){
            return res.send("Check your email and password ! ")
        }

        const token=newToken(user)
        // console.log(user,token)
        return res.send({user,token})

        
    } catch (error) {
        return res.send(error)
    }
})



router.get("",async(req,res)=>{
    try {

        const users=await User.find().lean().exec();
        return res.send(users)
        
    } catch (error) {
        return res.send(error)
    }
})





module.exports=router;







