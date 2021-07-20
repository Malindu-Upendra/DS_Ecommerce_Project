import mongoose from "mongoose";

//Data Structure Of CUstomer
const CustomerSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String
});

const customer = mongoose.model('customer', CustomerSchema);

export default customer;