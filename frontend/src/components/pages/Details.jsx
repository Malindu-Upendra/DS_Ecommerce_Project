import React, { Component } from 'react'
import '../css/Details.css'
import axios from "axios";
import AddtoCart from "../subComponents/AddToCartButton";

export class Details extends Component {

    state = {
        product : []
    }

    componentDidMount = () => {
    const title = this.props.match.params.title;

      axios.get(`http://localhost:5000/product/${title}`)
            .then(res => {
                const product = res.data;
                this.setState({product:product});
            })
    }

    render() {
        return (
            <div>
                {this.state.product.map(product =>(
                        <div className="details" key={product._id}>
                            <img src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-768x768.jpg" alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{product.title}</h2>
                                    <span>${product.price}</span>
                                </div>
                                <p>{product.description}</p>
                                <AddtoCart
                                    detail={product}/>
                            </div>
                        </div>
                ))}
            </div>
        )
    }
}

export default Details
