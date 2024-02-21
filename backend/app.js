const express=require('express');
const app=express();
//middleware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const errorMiddleware = require("./middleware/error");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Routes import
const product=require('./Routes/productRoutes')
const user=require("./routes/userRoutes")



app.use('/api/v1',product);
app.use('/api/v1',user);


app.use(express.static(path.join(__dirname, "../frontend/build")));


app.use(errorMiddleware);


module.exports=app;