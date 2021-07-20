import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Details.css'
import '../css/Cart.css'
import axios from "axios";
import DeleteFromCart from '../subComponents/deleteItemFromCart.js'

export class Cart extends Component {
    state = {
        cartItems: [],
        total:0
    };

    componentDidMount(){
        axios.get(`http://localhost:5000/Cart/`)
            .then(res => {
                this.setState({ cartItems:res.data });
                this.state.cartItems.forEach(item => {
                    this.setState({total:this.state.total + item.price})
                })
            })
    }

    render() {

        return (
                <>
                    {this.state.cartItems.map(item => (
                        <div className="details cart" key={item._id}>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                            </div>
                            <DeleteFromCart
                            id={item._id}/>
                        </div>
                    ))}
                    <div className="total">
                        <Link to={`/payment/${this.state.total}`}>Payment</Link>
                        <h3>Total: ${this.state.total}</h3>
                    </div>
                </>
            )
        }

}

export default Cart
