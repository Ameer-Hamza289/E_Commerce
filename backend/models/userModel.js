const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


//User Model Schema

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[30,"Name can't exceed 30 characters"],
        minLength:[3,"Name should have more than 4 characters"]
    },
    email:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password:{
        type:String,
        required:[true,"Please Enter The Password"],
        minLength:[8,"Password should be greater than 8 characters"]
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url: {
            type: String,
            required: true,
          },
        role:{
            type:String,
            default:"user"
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date
});
//hashing
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password =await  bcrypt.hash(this.password, 10);
  });

  userSchema.methods.getJWTToken=function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });
    }
//password check
    userSchema.methods.comparePassword = async function (password) {
        return await bcrypt.compare(password, this.password);
      };

      //get password reset token
    userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
    
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    
    return resetToken;
    };

    module.exports=mongoose.model('User',userSchema);