// import mongoose from "mongoose";

// const schema =new mongoose.Schema({
//     order_id:{
//         type:String,
//         required:true,
//     },
//     payment_id:{
//         type:String,
//         required:true,
//     },
//     signature:{
//         type:String,
//         required:true,
//     },
//     createdAt:{
//         type:Date,
//         default:Date.now,
//     },
// })

// export const Payment =mongoose.model("Payment",schema)




//previous correct code
// models/Payment.js
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  order_id: {
    type: String,
  },
  status: {
    type: String,
    enum: ["success", "failed"], // Allowed statuses
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Payment = mongoose.model("Payment", schema);




// import mongoose from "mongoose";

// const PaymentSchema = new mongoose.Schema({
//     order_id: { type: String, required: true },
//     payment_id: { type: String, required: true, unique: true },
//     amount: { type: Number, required: true },
//     status: { type: String, required: true }
// }, { timestamps: true });

// const Payment = mongoose.model("Payment", PaymentSchema);
// export default Payment; // This is the correct export
