const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://vishalpawar:lx0V4Q4EWJRMXJTU@own-data.unin18g.mongodb.net/?retryWrites=true&w=majority&appName=own-data?directConnection=true',{
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