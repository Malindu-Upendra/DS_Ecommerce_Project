import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Customer from "./routes/Customer.js";
import Product from "./routes/Product.js";
import Cart from "./routes/Cart.js";
import Payment from "./routes/Payment.js";

const app = express();
app.use(cors());
app.use(bodyparser.json({limit: "20mb", extended: true}));
app.use(bodyparser.urlencoded({limit: "20mb", extended: true}));

//line 15-23 is connecting mongodb Atlas
const connection_url = "mongodb+srv://malindu:n41mXeoMZpkEEgcG@cluster0.joka3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(connection_url,{useNewUrlParser:true, useUnifiedTopology:true}).
then(() => app.listen(PORT,() => console.log(`connection stablished successfully on port: ${PORT}`))).
catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);

//declaring path to use Rest Services
app.use('/customer', Customer);
app.use('/product', Product);
app.use('/Cart', Cart);
app.use('/Payment', Payment);



