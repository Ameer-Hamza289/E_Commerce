const mongoose=require('mongoose');

// Product Model Schema

const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true
      },
      description:{
        type:String,
        required:[true,"Please Enter Product Description"]
      },
      price:{
        type:Number,
        maxLength:[8,"Price should not be greater than 8 characters"],
        required:true
      },
      ratings:{
        type:Number,
        default:0
      },
      images:[{
        public_id: {
        type: String,
        required: true
        },
        url: {
        type: String,
        required: true
        },
      }],
      category:{
        type: String,
        required: [true, "Please Enter Product Category"]
      },
      Stock:{
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1

      },
      numOfReviews:{
        type:Number,
        default:0
      },
      reviews:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
      }],
      user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
      },
      createdAt:{
        type:Date,
        default:Date.now
      }
})

module.exports=mongoose.model("Product",productSchema);