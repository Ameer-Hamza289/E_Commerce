const express=require('express');
const app=express();
const cors=require('cors');
//middleware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const errorMiddleware = require("./middleware/error");

app.use(cors({
  origin:'*'
}))
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Routes import
const product=require('./routes/productRoutes');
const user=require("./routes/userRoutes");
const order=require("./routes/orderRoutes");
const payment=require("./routes/paymentRoutes");

app.get("/",(req,res)=>{
  res.send("Hello World!")
})
app.use('/api/v1',product);
app.use('/api/v1',user);
app.use('/api/v1',order);
app.use("/api/v1", payment);


app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleware);


module.exports=app;