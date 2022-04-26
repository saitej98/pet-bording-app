const express=require("express");
const CreateEntity=require("../models/CreateModels")

const router=express.Router();

router.get("/all",async(req,res)=>{
    try{

        // const page = req.query.page || 1;

        // const size = req.query.size || 10;

        // const user = await User.find().skip((page - 1) * size).limit(size).lean().exec();

        // const totalPages = Math.ceil((await User.find().countDocuments()) / size);

        const page = req.query.page || 1;
        const size = req.query.size || 2;
        const entity=await CreateEntity.find().skip((page-1)*size).limit(size).lean().exec();
        const totalPages=Math.ceil((await CreateEntity.find().countDocuments())/size)

        return res.send({entity})
    }
    catch(err){
        return res.send(err)
    }
})

router.post("/create",async(req,res)=>{
    try{
        const entity=await CreateEntity.create(req.body);
        return res.send(entity)
    }
    catch(err){
        return res.send(err)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const entity=await CreateEntity.findById(req.params.id).lean().exec();
        return res.send(entity)
    }
    catch(err){
        return res.send(err)
    }
})




module.exports=router;


