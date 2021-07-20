import mongoose from "mongoose";

//Data Structure Of Cart
const CartSchema = mongoose.Schema({

    title: {
        type: String,
        maxlength: 50
    },
    price: {
        type: Number,
        default: 0
    }
});

const cart = mongoose.model('cart', CartSchema);

export default cart;