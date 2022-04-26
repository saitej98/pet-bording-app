const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb://saiteja:saiteja123@cluster0-shard-00-00.7cshu.mongodb.net:27017,cluster0-shard-00-01.7cshu.mongodb.net:27017,cluster0-shard-00-02.7cshu.mongodb.net:27017/petboarding?ssl=true&replicaSet=atlas-3fn0q6-shard-0&authSource=admin&retryWrites=true&w=majority")
}