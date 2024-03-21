const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/node',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MD connected");
    } catch(error){
        console.error("get error in connection",error)
        process.exit(1);
    }
}

module.exports =connectDB;