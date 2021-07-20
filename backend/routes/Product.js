import express from "express";
import Product from "../model/product.js";
import multer from "multer";
import path from "path";
import * as res from "express";
const router = express.Router();

//Retrieving All products
router.get('/', async (req,res) => {

    try {
        const products = await Product.find();
        res.status(200).json(products);
    }catch (err) {
        res.status(404).json({message: err.message});
    }
});

//Retrieving specific product
router.get('/:title',async (req,res) => {
    const title = req.params.title;

    try{
        const p = await Product.findOne({"title":title});
        res.json(p);
    }catch (e) {
        res.status(404).json({message: e.message});
    }
});

//deleting specific product
router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
        await Product.findByIdAndRemove(id).exec();
        res.send({message:'successfully deleted',success:'true'});
    }catch (e) {
        console.log(e);
    }
});

//Uploading product
router.post('/uploadProduct', async (req,res) => {
    const p = req.body;

    const newProduct = new Product(p);
    try {
        await newProduct.save();
        res.send({success:'true',message:"Successfully Added"});
    }catch (e) {
        console.log(e);
    }

})

//Upadting specific item
router.put('/update/:id', async (req,res) => {
    const p = req.body;
    const id = req.params.id;

    const newProduct = new Product(p);
    console.log(id)
    try {
        await Product.findByIdAndUpdate({id},{title: newProduct.title,price:newProduct.price,description:newProduct.description})
        res.send({success:'true',message:"Successfully Updated"});
    }catch (e) {
        console.log(e);
    }

})

//creating local folder to insert images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single("file");

//=================================
//             Product
//=================================

//uploading image and getting the path
router.post("/uploadImage", upload, async (req, res) => {

    await upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});

//uploading product with image path
router.post("/uploadProduct",  (req, res) => {

    //save all the data we got from the client into the DB
    const p = new Product(req.body)
    //Product.deleteMany({})

    p.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

export default router;