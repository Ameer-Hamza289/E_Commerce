const mongoose=require('mongoose');
// require('dotenv').config();

const connectDB=()=>{
    const uri=process.env.ATLAS_URI;
    // console.log(uri+'//');
    mongoose.connect(uri)
    .then(() => {console.log("Connected to MongoDB Successfully")})
    .catch((err)=>console.log(err))
   
}

module.exports=connectDB;