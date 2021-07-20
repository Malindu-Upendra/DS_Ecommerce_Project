import express from "express";
import customer from "../model/customer.js";
const router = express.Router();

//Retrieving All Customers
router.get('/', async (req,res) => {
    try {
        const customers = await customer.find();
        res.status(200).json(customers);
    }catch (err) {
        res.status(404).json({message: err.message});
    }
});

//Inserting Customer
router.post('/', async (req,res) => {
    const cus = req.body;

    const newCustomer = new customer(cus);

    try {
        await newCustomer.save();
        res.status(201).json({success:'true',message:'account Created Successfully'});
    }catch (e) {
        res.status(409).json({message : e.message});
    }
});

//Deleting Customer
router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
        await customer.findByIdAndRemove(id).exec();
        res.send('successfully deleted');
    }catch (e) {
        console.log(e);
    }
});

export default router;