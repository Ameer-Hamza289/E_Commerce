const express=require('express');
// const mongoose=require('mongoose')
const app=express();
//middleware
app.use(express.json())

//Routes import
const product=require('./Routes/productRoutes')
app.use('/api/v',product);


module.exports=app;