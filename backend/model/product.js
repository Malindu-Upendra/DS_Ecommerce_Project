import mongoose from "mongoose";

//Data Structure Of Product
const ProductSchema = mongoose.Schema({

    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: Array,
    },
});

const product = mongoose.model('Product', ProductSchema);

export default  product ;

