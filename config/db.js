const mongoose=require('mongoose');
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected sucessfully to database ${mongoose.connection.host}`.bgMagenta.white);
        
    }catch(err){
        console.log(`Mongodb not connected due to error :  ${err}`.bgRed.white);

    }
}
module.exports=connectDB;