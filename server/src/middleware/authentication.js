
require("dotenv").config();
const jwt=require("jsonwebtoken");

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){
                return reject(user)
            }else{
                return resolve(user)
            }
        })
    })

}

const authentication = async (req,res,next) =>{
    try {

        const token=req.headers["x-access-token"]
        let user=await verifyToken(token);
        req.user=user.user
        
    } catch (error) {
        return res.send(err)
    }
    return next();
}

module.exports=authentication;