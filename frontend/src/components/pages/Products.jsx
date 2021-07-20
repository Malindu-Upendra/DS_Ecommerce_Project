import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Products.css'
import axios from "axios";
import AddtoCart from "../subComponents/AddToCartButton.js"

 class Products extends Component {
    state = {
            product: [],
        };

    componentDidMount() {
        axios.get(`http://localhost:5000/product/`)
            .then(res => {
                const product = res.data;
                this.setState({ product });
            })
    }

    render() {
        return (
            <div id="product">

               {this.state.product.map(product =>(
                   <div className="card" key={product._id} style={{ maxWidth: '23%'}}>
                       <Link to={`/product/${product.title}`}>
                           <img src={product.image} alt=""/>
                       </Link>
                       <div className="content">
                           <h3>
                               <Link to={`/product/${product.title}`}>{product.title}</Link>
                           </h3>
                           <span>${product.price}</span>
                           <p>{product.description}</p>
                           <AddtoCart
                                detail={product}/>
                       </div>
                   </div>
                   ))
               }

            </div>
        )
    }
}

export default Products
