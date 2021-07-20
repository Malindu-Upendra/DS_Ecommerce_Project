import express from "express";
import Cart from "../model/Cart.js";
const router = express.Router();

//inserting product
router.post('/', async (req,res) => {
    const item = req.body;

    const newItem = new Cart(item);

    try {
        await newItem.save();
        res.send({success:'true',message:"Successfully Added"});
    }catch (e) {
        res.status(409).json({message : e.message});
    }
});

//Retrieving all products
router.get('/', async (req,res) => {

    try {
        const cartItems = await Cart.find();
        res.json(cartItems);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

});

//Deleting specific CartItem
router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    console.log(id);
    try {
        await Cart.findByIdAndRemove(id).exec();
        res.send({message:'successfully deleted',success : 'true'});
    }catch (e) {
        console.log(e);
    }
});

export default router;