const mongoose=require("mongoose")

const createEntitySchema=new mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    address:{type:String,required:true},
    capacity:{type:Number,required:true} ,
    costPerDay:{type:Number,required:true},
    verified:{type:String,required:true},
    rating:{type:Number,required:true},
    typeDog:{type:Boolean,required:true , default:false},
    typeCat:{type:Boolean,required:true , default:false},
    typeRabit:{type:Boolean,required:true , default:false},
    weight:{type:String,required:true},
    roamingPlace:{type:String,required:true},
    sleepingPlace:{type:String,required:true},
    pottyBreaks:{type:Number,required:true},
    walksPerDay:{type:Number,required:true},
    homeType:{type:String,required:true},
    areaSize:{type:String,required:true},
    emergencyTransport:{type:String,default:"Yes"}
},{
    timestamps:true,
    versionKey:false
})

const CreateEntity=mongoose.model("createEntity",createEntitySchema)

module.exports=CreateEntity;