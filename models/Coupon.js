import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
    code:{type:String,required:true},
    amount:{type:Number,required:true},
    status:{type:Boolean,required:true,default:true},
})

export default mongoose.models.Coupon ||mongoose.model('Coupon',CouponSchema) ;